from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.data.haptics import HAPTIC_PATTERNS
from app.database import get_db
from app.models import DigitalTwin, GisFeature, KnowledgeDomain
from app.schemas import DomainPublic, TwinPublic

router = APIRouter(tags=["bootstrap"])


@router.get("/bootstrap")
def bootstrap(db: Session = Depends(get_db)) -> dict:
    domains = db.query(KnowledgeDomain).order_by(KnowledgeDomain.category, KnowledgeDomain.name).all()
    twins = db.query(DigitalTwin).all()
    layers = [row[0] for row in db.query(GisFeature.layer).distinct().all()]
    return {
        "service": "Virtual GeoTwinVerse",
        "domains": [DomainPublic.model_validate(d).model_dump() for d in domains],
        "twins": [TwinPublic.model_validate(t).model_dump() for t in twins],
        "haptics": HAPTIC_PATTERNS,
        "layers": layers,
        "engines": [
            {"id": "flood", "name": "Flood inundation", "haptic": "env.ocean"},
            {"id": "climate", "name": "Climate forcing", "haptic": "env.wind"},
            {"id": "traffic", "name": "Corridor traffic", "haptic": "nav.vehicle_motion"},
            {"id": "epidemic", "name": "SIR epidemic", "haptic": "edu.heartbeat"},
            {"id": "ndvi", "name": "NDVI phenology", "haptic": "env.forest"},
            {"id": "orbit", "name": "Orbital mechanics", "haptic": "edu.rocket"},
        ],
    }
