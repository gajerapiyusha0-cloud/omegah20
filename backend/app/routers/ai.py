from fastapi import APIRouter

from app.schemas import AssistantRequest
from app.services.ai import assist
from app.services.codegen import adaptive_path, snippets_for

router = APIRouter(prefix="/ai", tags=["ai"])


@router.post("/assist")
def assistant(payload: AssistantRequest) -> dict:
    return assist(payload.message, locale=payload.locale, context=payload.context)


@router.post("/codegen")
def codegen(payload: AssistantRequest) -> dict:
    return snippets_for(payload.message[:80] or "GIS")


@router.get("/path")
def learning_path(slug: str = "gis") -> dict:
    return adaptive_path(slug)


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
