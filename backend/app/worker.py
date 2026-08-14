"""Optional Celery worker for raster and satellite jobs."""

from __future__ import annotations

from celery import Celery

from app.config import get_settings
from app.services.gis import synthetic_ndvi

settings = get_settings()
celery_app = Celery("geotwinverse", broker=settings.redis_url, backend=settings.redis_url)


@celery_app.task(name="geotwinverse.compute_ndvi_proxy")
def compute_ndvi_proxy(scene: str = "global") -> dict:
    payload = synthetic_ndvi(seed=abs(hash(scene)) % 10_000)
    payload["scene"] = scene
    return payload
