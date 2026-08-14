from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import DigitalTwin, GisFeature, KnowledgeDomain, SimulationRun, User

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/overview")
def overview(db: Session = Depends(get_db)) -> dict:
    domains = db.query(KnowledgeDomain).all()
    by_cat: dict[str, int] = {}
    for domain in domains:
        by_cat[domain.category] = by_cat.get(domain.category, 0) + 1
    return {
        "domains": len(domains),
        "twins": db.query(DigitalTwin).count(),
        "features": db.query(GisFeature).count(),
        "simulations": db.query(SimulationRun).count(),
        "explorers": db.query(User).count(),
        "categories": [{"name": k, "count": v} for k, v in sorted(by_cat.items())],
    }
