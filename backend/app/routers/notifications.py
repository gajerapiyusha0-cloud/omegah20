from datetime import datetime, timezone

from fastapi import APIRouter

router = APIRouter(prefix="/notifications", tags=["notifications"])


@router.get("")
def list_notifications() -> list[dict]:
    now = datetime.now(timezone.utc).isoformat()
    return [
        {"id": "n1", "kind": "ai", "title": "Learning path ready", "body": "A GIS → remote sensing → climate path is suggested.", "haptic": "col.ai", "at": now},
        {"id": "n2", "kind": "twin", "title": "Aurora Harbor flood watch", "body": "Simulated surge scenario exceeds 0.8 m in the harbor twin.", "haptic": "env.ocean", "at": now},
        {"id": "n3", "kind": "satellite", "title": "NDVI greening", "body": "Canopy Reserve composite shows moderate vegetation.", "haptic": "env.forest", "at": now},
        {"id": "n4", "kind": "collab", "title": "Research floor is open", "body": "Join the collaboration room to share a twin viewpoint.", "haptic": "col.incoming", "at": now},
    ]
