from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import KnowledgeDomain, LearningProgress, User
from app.routers.auth import get_current_user
from app.services.education import grade, quiz_for_domain

router = APIRouter(prefix="/learn", tags=["education"])


class GradeRequest(BaseModel):
    answers: list[int]


class ProgressRequest(BaseModel):
    domain_slug: str
    completed_lessons: int = 1
    score: float = 0


@router.get("/quiz/{slug}")
def quiz(slug: str, db: Session = Depends(get_db)) -> dict:
    domain = db.query(KnowledgeDomain).filter(KnowledgeDomain.slug == slug).first()
    if not domain:
        raise HTTPException(status_code=404, detail="Domain not found")
    payload = quiz_for_domain(domain)
    public_questions = [{k: v for k, v in q.items() if k != "answer"} for q in payload["questions"]]
    return {"domain": payload["domain"], "title": payload["title"], "questions": public_questions}


@router.post("/quiz/{slug}/grade")
def grade_quiz(slug: str, payload: GradeRequest, db: Session = Depends(get_db), user: User | None = Depends(get_current_user)) -> dict:
    domain = db.query(KnowledgeDomain).filter(KnowledgeDomain.slug == slug).first()
    if not domain:
        raise HTTPException(status_code=404, detail="Domain not found")
    result = grade(quiz_for_domain(domain), payload.answers)
    if user:
        row = (
            db.query(LearningProgress)
            .filter(LearningProgress.user_id == user.id, LearningProgress.domain_slug == slug)
            .first()
        )
        if not row:
            row = LearningProgress(user_id=user.id, domain_slug=slug)
            db.add(row)
        row.score = result["score"]
        db.commit()
    return result


@router.post("/progress")
def save_progress(payload: ProgressRequest, db: Session = Depends(get_db), user: User | None = Depends(get_current_user)) -> dict:
    if not user:
        return {"saved": False, "reason": "anonymous"}
    row = (
        db.query(LearningProgress)
        .filter(LearningProgress.user_id == user.id, LearningProgress.domain_slug == payload.domain_slug)
        .first()
    )
    if not row:
        row = LearningProgress(user_id=user.id, domain_slug=payload.domain_slug)
        db.add(row)
    row.completed_lessons = payload.completed_lessons
    row.score = payload.score
    db.commit()
    return {"saved": True, "domain_slug": payload.domain_slug, "score": row.score}


@router.get("/progress")
def list_progress(db: Session = Depends(get_db), user: User | None = Depends(get_current_user)) -> list[dict]:
    if not user:
        return []
    rows = db.query(LearningProgress).filter(LearningProgress.user_id == user.id).all()
    return [{"domain_slug": r.domain_slug, "completed_lessons": r.completed_lessons, "score": r.score} for r in rows]
