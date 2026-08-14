from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import SimulationRun
from app.schemas import SimulationRequest
from app.services.simulation import run_simulation

router = APIRouter(prefix="/simulations", tags=["simulations"])

ENGINES = ["flood", "climate", "traffic", "epidemic", "ndvi", "orbit"]


@router.get("/engines")
def engines() -> list[dict]:
    return [
        {"id": "flood", "name": "Flood inundation", "haptic": "env.ocean"},
        {"id": "climate", "name": "Climate forcing", "haptic": "env.wind"},
        {"id": "traffic", "name": "Corridor traffic", "haptic": "nav.vehicle_motion"},
        {"id": "epidemic", "name": "SIR epidemic", "haptic": "edu.heartbeat"},
        {"id": "ndvi", "name": "NDVI phenology", "haptic": "env.forest"},
        {"id": "orbit", "name": "Orbital mechanics", "haptic": "edu.rocket"},
    ]


@router.post("/run")
def run(payload: SimulationRequest, db: Session = Depends(get_db)) -> dict:
    try:
        result = run_simulation(payload.engine, payload.parameters)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    record = SimulationRun(name=payload.name, engine=payload.engine, parameters=payload.parameters, result=result)
    db.add(record)
    db.commit()
    db.refresh(record)
    return {"id": record.id, "name": record.name, "result": result}


@router.get("")
def list_runs(db: Session = Depends(get_db)) -> list[dict]:
    rows = db.query(SimulationRun).order_by(SimulationRun.id.desc()).limit(20).all()
    return [{"id": r.id, "name": r.name, "engine": r.engine, "created_at": r.created_at.isoformat()} for r in rows]
