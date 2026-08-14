from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import GisFeature
from app.services.gis import synthetic_ndvi

router = APIRouter(prefix="/processing", tags=["processing"])


class ZonalRequest(BaseModel):
    scene: str = "canopy-reserve"
    threshold: float = 0.4


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
    grid = synthetic_ndvi(seed=abs(hash(scene)) % 10_000)
    cells = [v for row in grid["grid"] for v in row]
    lo, hi = min(cells), max(cells)
    width = (hi - lo) / max(bins, 1) or 1
    counts = [0] * bins
    for value in cells:
        idx = min(bins - 1, int((value - lo) / width))
        counts[idx] += 1
    return {"scene": scene, "bins": bins, "counts": counts, "min": lo, "max": hi}


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
