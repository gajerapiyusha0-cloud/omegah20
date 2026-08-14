from datetime import datetime

from fastapi import APIRouter, Depends
from pydantic import BaseModel

from app.models import User
from app.routers.auth import get_current_user

router = APIRouter(prefix="/journal", tags=["journal"])

_NOTES: list[dict] = []


class NoteIn(BaseModel):
    title: str
    body: str
    domain_slug: str | None = None


@router.get("")
def list_notes() -> list[dict]:
    return list(reversed(_NOTES[-40:]))


@router.post("")
def add_note(payload: NoteIn, user: User | None = Depends(get_current_user)) -> dict:
    note = {
        "id": len(_NOTES) + 1,
        "title": payload.title,
        "body": payload.body,
        "domain_slug": payload.domain_slug,
        "author": user.display_name if user else "guest",
        "at": datetime.utcnow().isoformat() + "Z",
    }
    _NOTES.append(note)
    return note
