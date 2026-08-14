from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import KnowledgeDomain
from app.schemas import DomainPublic
from app.services import ai as ai_service
from app.services import graph as graph_service

router = APIRouter(prefix="/domains", tags=["domains"])


@router.get("", response_model=list[DomainPublic])
def list_domains(
    db: Session = Depends(get_db),
    q: str | None = None,
    category: str | None = None,
    limit: int = Query(400, le=500),
    offset: int = 0,
) -> list[KnowledgeDomain]:
    query = db.query(KnowledgeDomain)
    if category:
        query = query.filter(KnowledgeDomain.category == category)
    if q:
        like = f"%{q}%"
        query = query.filter(KnowledgeDomain.name.ilike(like) | KnowledgeDomain.summary.ilike(like))
    return query.order_by(KnowledgeDomain.category, KnowledgeDomain.name).offset(offset).limit(limit).all()


@router.get("/categories")
def categories(db: Session = Depends(get_db)) -> list[dict]:
    rows = db.query(KnowledgeDomain.category, KnowledgeDomain.color).distinct().all()
    return [{"category": c, "color": color} for c, color in rows]


@router.get("/{slug}", response_model=DomainPublic)
def get_domain(slug: str, db: Session = Depends(get_db)) -> KnowledgeDomain:
    domain = db.query(KnowledgeDomain).filter(KnowledgeDomain.slug == slug).first()
    if not domain:
        raise HTTPException(status_code=404, detail="Domain not found")
    return domain


@router.get("/{slug}/related", response_model=list[DomainPublic])
def related(slug: str, db: Session = Depends(get_db)) -> list[KnowledgeDomain]:
    return graph_service.related_domains(db, slug)


@router.get("/{slug}/summary")
def summary(slug: str, db: Session = Depends(get_db)) -> dict:
    domain = db.query(KnowledgeDomain).filter(KnowledgeDomain.slug == slug).first()
    if not domain:
        raise HTTPException(status_code=404, detail="Domain not found")
    return {
        "slug": domain.slug,
        "summary": ai_service.summarize_domain(domain.name, domain.summary),
        "lessons": [
            f"Foundations of {domain.name}",
            f"Methods and models in {domain.name}",
            f"Spatial and twin applications of {domain.name}",
            f"Open research questions in {domain.name}",
        ][: domain.lesson_count],
    }
