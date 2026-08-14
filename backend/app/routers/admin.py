from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.data.haptics import HAPTIC_PATTERNS
from app.data.plugins import PLUGIN_CATALOG
from app.models import DigitalTwin, KnowledgeDomain, SimulationRun, User

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/console")
def console(db: Session = Depends(get_db)) -> dict:
    return {
        "service": "Virtual GeoTwinVerse",
        "users": db.query(User).count(),
        "domains": db.query(KnowledgeDomain).count(),
        "twins": db.query(DigitalTwin).count(),
        "simulation_runs": db.query(SimulationRun).count(),
        "haptic_patterns": len(HAPTIC_PATTERNS),
        "plugins": len(PLUGIN_CATALOG),
        "flags": {
            "haptics_optional": True,
            "copernicus_live": False,
            "oidc": False,
            "debug": True,
        },
    }
