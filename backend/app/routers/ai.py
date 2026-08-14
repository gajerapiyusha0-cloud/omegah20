from fastapi import APIRouter

from app.schemas import AssistantRequest
from app.services.ai import assist

router = APIRouter(prefix="/ai", tags=["ai"])


@router.post("/assist")
def assistant(payload: AssistantRequest) -> dict:
    return assist(payload.message, locale=payload.locale, context=payload.context)


@router.get("/locales")
def locales() -> list[dict]:
    return [
        {"code": "en", "name": "English"},
        {"code": "es", "name": "Spanish"},
        {"code": "fr", "name": "French"},
        {"code": "de", "name": "German"},
        {"code": "hi", "name": "Hindi"},
        {"code": "zh", "name": "Chinese"},
        {"code": "ar", "name": "Arabic"},
        {"code": "ja", "name": "Japanese"},
        {"code": "pt", "name": "Portuguese"},
    ]
