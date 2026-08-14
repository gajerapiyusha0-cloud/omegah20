from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import GisFeature
from app.schemas import ConvertRequest, MeasureRequest
from app.services import gis as gis_service

router = APIRouter(prefix="/gis", tags=["gis"])


@router.get("/features")
def features(layer: str | None = None, db: Session = Depends(get_db)) -> dict:
    query = db.query(GisFeature)
    if layer:
        query = query.filter(GisFeature.layer == layer)
    items = query.all()
    return {
        "type": "FeatureCollection",
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


@router.get("/layers")
def layers(db: Session = Depends(get_db)) -> list[str]:
    rows = db.query(GisFeature.layer).distinct().all()
    return [r[0] for r in rows]


@router.post("/measure")
def measure(payload: MeasureRequest) -> dict:
    meters = gis_service.haversine_m(payload.from_lon, payload.from_lat, payload.to_lon, payload.to_lat)
    return {"meters": meters, "kilometers": meters / 1000.0}


@router.post("/convert")
def convert(payload: ConvertRequest) -> dict:
    return gis_service.convert_coords(payload.x, payload.y, payload.from_crs, payload.to_crs)


@router.get("/heatmap")
def heatmap(db: Session = Depends(get_db)) -> dict:
    items = db.query(GisFeature).all()
    as_dicts = [{"name": f.name, "geometry": f.geometry, "properties": f.properties} for f in items]
    return {"points": gis_service.heatmap_points(as_dicts)}


@router.get("/area/{feature_id}")
def area(feature_id: int, db: Session = Depends(get_db)) -> dict:
    feat = db.get(GisFeature, feature_id)
    if not feat:
        raise HTTPException(status_code=404, detail="Feature not found")
    area_m2 = gis_service.feature_area_m2(feat.geometry)
    return {"id": feat.id, "name": feat.name, "area_m2": area_m2}
