from fastapi import APIRouter, HTTPException

from app.schemas import HapticEvent
from app.services import haptic as haptic_service

router = APIRouter(prefix="/haptics", tags=["haptics"])


@router.get("/patterns")
def patterns(category: str | None = None) -> list[dict]:
    return haptic_service.list_patterns(category)


@router.post("/play")
def play(event: HapticEvent) -> dict:
    try:
        resolved = haptic_service.resolve(event.pattern_id, event.intensity)
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="Unknown haptic pattern") from exc
    resolved["context"] = event.context
    resolved["hardware_required"] = False
    return resolved
