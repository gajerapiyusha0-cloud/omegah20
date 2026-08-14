from time import time

from fastapi import APIRouter, Response
from sqlalchemy import text

from app.database import SessionLocal
from app.models import KnowledgeDomain, SimulationRun

router = APIRouter(tags=["observability"])

STARTED = time()


@router.get("/metrics")
def metrics() -> Response:
    db = SessionLocal()
    try:
        domains = db.query(KnowledgeDomain).count()
        sims = db.query(SimulationRun).count()
        db.execute(text("SELECT 1"))
        db_up = 1
    except Exception:
        domains = 0
        sims = 0
        db_up = 0
    finally:
        db.close()
    body = "\n".join(
        [
            "# HELP geotwin_up 1 if process is serving",
            "# TYPE geotwin_up gauge",
            "geotwin_up 1",
            "# HELP geotwin_domains_total Seeded knowledge domains",
            "# TYPE geotwin_domains_total gauge",
            f"geotwin_domains_total {domains}",
            "# HELP geotwin_simulations_total Simulation runs",
            "# TYPE geotwin_simulations_total counter",
            f"geotwin_simulations_total {sims}",
            "# HELP geotwin_db_up Database ping",
            "# TYPE geotwin_db_up gauge",
            f"geotwin_db_up {db_up}",
            "# HELP geotwin_uptime_seconds Process uptime",
            "# TYPE geotwin_uptime_seconds gauge",
            f"geotwin_uptime_seconds {int(time() - STARTED)}",
            "",
        ]
    )
    return Response(content=body, media_type="text/plain; version=0.0.4")
