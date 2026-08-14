from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import GisFeature
from app.services.gis import synthetic_histogram, synthetic_ndvi
from app.worker import celery_app, enqueue_ndvi

router = APIRouter(prefix="/processing", tags=["processing"])


class ZonalRequest(BaseModel):
    scene: str = "canopy-reserve"
    threshold: float = 0.4


class NdviJobRequest(BaseModel):
    scene: str = "canopy-reserve"


@router.post("/zonal")
def zonal(payload: ZonalRequest) -> dict:
    grid = synthetic_ndvi(seed=abs(hash(payload.scene)) % 10_000)
    cells = [v for row in grid["grid"] for v in row]
    above = [v for v in cells if v >= payload.threshold]
    return {
        "scene": payload.scene,
        "threshold": payload.threshold,
        "cell_count": len(cells),
        "above_threshold": len(above),
        "mean": grid["ndvi_mean"],
        "engine": "numpy-proxy",
        "note": "Swap for Rasterio/GDAL zonal stats when COGs are mounted.",
    }


@router.get("/histogram")
def histogram(scene: str = "canopy-reserve", bins: int = 8) -> dict:
    return synthetic_histogram(scene=scene, bins=bins)


@router.post("/jobs/ndvi")
def ndvi_job(payload: NdviJobRequest) -> dict:
    return enqueue_ndvi(payload.scene)


@router.get("/jobs/{task_id}")
def job_status(task_id: str) -> dict:
    result = celery_app.AsyncResult(task_id)
    payload = {"task_id": task_id, "state": result.state, "ready": result.ready()}
    if result.successful():
        payload["result"] = result.result
    elif result.failed():
        payload["error"] = str(result.result)
    return payload


@router.get("/export/geojson")
def export_geojson(db: Session = Depends(get_db)) -> dict:
    items = db.query(GisFeature).all()
    return {
        "type": "FeatureCollection",
        "name": "geotwinverse-export",
        "features": [
            {
                "type": "Feature",
                "id": f.id,
                "geometry": f.geometry,
                "properties": {"name": f.name, "layer": f.layer, **(f.properties or {})},
            }
            for f in items
        ],
    }
