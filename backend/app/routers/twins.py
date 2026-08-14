from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import DigitalTwin, TwinTelemetry
from app.schemas import TwinPublic

router = APIRouter(prefix="/twins", tags=["twins"])


@router.get("", response_model=list[TwinPublic])
def list_twins(twin_type: str | None = None, db: Session = Depends(get_db)) -> list[DigitalTwin]:
    query = db.query(DigitalTwin)
    if twin_type:
        query = query.filter(DigitalTwin.twin_type == twin_type)
    return query.all()


@router.get("/{slug}", response_model=TwinPublic)
def get_twin(slug: str, db: Session = Depends(get_db)) -> DigitalTwin:
    twin = db.query(DigitalTwin).filter(DigitalTwin.slug == slug).first()
    if not twin:
        raise HTTPException(status_code=404, detail="Twin not found")
    return twin


@router.post("/{slug}/tick", response_model=TwinPublic)
def tick_twin(slug: str, db: Session = Depends(get_db)) -> DigitalTwin:
    twin = db.query(DigitalTwin).filter(DigitalTwin.slug == slug).first()
    if not twin:
        raise HTTPException(status_code=404, detail="Twin not found")
    state = dict(twin.state or {})
    for key, value in list(state.items()):
        if isinstance(value, (int, float)) and not isinstance(value, bool):
            drift = 0.02 if value < 2 else value * 0.01
            state[key] = round(float(value) + ((hash(key) % 7) - 3) * drift * 0.1, 4)
    twin.state = state
    db.add(TwinTelemetry(twin_id=twin.id, metrics=state))
    db.commit()
    db.refresh(twin)
    return twin


@router.get("/{slug}/timeseries")
def timeseries(slug: str, db: Session = Depends(get_db)) -> dict:
    twin = db.query(DigitalTwin).filter(DigitalTwin.slug == slug).first()
    if not twin:
        raise HTTPException(status_code=404, detail="Twin not found")
    rows = (
        db.query(TwinTelemetry)
        .filter(TwinTelemetry.twin_id == twin.id)
        .order_by(TwinTelemetry.timestamp.desc())
        .limit(48)
        .all()
    )
    if not rows:
        now = datetime.utcnow()
        synthetic = []
        for i in range(12):
            metrics = {k: (v * (1 + 0.02 * ((i % 5) - 2)) if isinstance(v, (int, float)) else v) for k, v in (twin.state or {}).items()}
            synthetic.append({"timestamp": (now - timedelta(hours=12 - i)).isoformat() + "Z", "metrics": metrics})
        return {"slug": slug, "samples": synthetic, "synthetic": True}
    return {
        "slug": slug,
        "samples": [{"timestamp": r.timestamp.isoformat() + "Z", "metrics": r.metrics} for r in reversed(rows)],
        "synthetic": False,
    }
