from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.config import get_settings
from app.database import get_db
from app.data.haptics import HAPTIC_PATTERNS
from app.data.plugins import PLUGIN_CATALOG
from app.models import DigitalTwin, KnowledgeDomain, SimulationRun, User

from app.services.connectors import connector_status

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/console")
def console(db: Session = Depends(get_db)) -> dict:
    settings = get_settings()
    connectors = connector_status()
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
            "stac_live": True,
            "neo4j": bool(settings.neo4j_uri),
            "oidc": bool(settings.oidc_issuer and settings.oidc_client_id),
            "webxr": True,
            "cityjson": True,
            "nginx_edge": connectors["nginx_edge"],
            "redis": connectors["redis"],
            "debug": settings.debug,
        },
    }
