"""Optional Celery worker for raster and satellite jobs."""

from __future__ import annotations

from celery import Celery

from app.config import get_settings
from app.services.gis import synthetic_histogram, synthetic_ndvi

settings = get_settings()
celery_app = Celery("geotwinverse", broker=settings.redis_url, backend=settings.redis_url)
celery_app.conf.broker_connection_retry_on_startup = True
celery_app.conf.timezone = "UTC"
celery_app.conf.beat_schedule = {
    "refresh-canopy-ndvi": {
        "task": "geotwinverse.compute_ndvi_proxy",
        "schedule": 300.0,
        "args": ("canopy-reserve",),
    }
}


@celery_app.task(name="geotwinverse.compute_ndvi_proxy")
def compute_ndvi_proxy(scene: str = "global") -> dict:
    payload = synthetic_ndvi(seed=abs(hash(scene)) % 10_000)
    payload["scene"] = scene
    return payload


@celery_app.task(name="geotwinverse.compute_histogram")
def compute_histogram(scene: str = "global", bins: int = 8) -> dict:
    return synthetic_histogram(scene=scene, bins=bins)


def enqueue_ndvi(scene: str) -> dict:
    try:
        async_result = compute_ndvi_proxy.delay(scene)
        return {"queued": True, "task_id": async_result.id, "broker": "redis"}
    except Exception as exc:
        result = compute_ndvi_proxy(scene)
        return {
            "queued": False,
            "task_id": None,
            "broker": "inline",
            "result": result,
            "error": str(exc)[:160],
        }
