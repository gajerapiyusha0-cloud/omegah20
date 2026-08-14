from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.database import SessionLocal, init_db
from app.routers import (
    admin,
    ai,
    analytics,
    assets,
    auth,
    bootstrap,
    collab,
    domains,
    education,
    gis,
    graph,
    haptics,
    health,
    journal,
    notifications,
    observability,
    plugins,
    processing,
    satellite,
    simulations,
    stac,
    timeline,
    twins,
    ws,
)
from app.seed import seed_if_empty

settings = get_settings()


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    db = SessionLocal()
    try:
        seed_if_empty(db)
    finally:
        db.close()
    yield


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="Immersive geospatial knowledge universe API",
    openapi_url=f"{settings.api_prefix}/openapi.json",
    docs_url="/docs",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if settings.debug else settings.origins,
    allow_credentials=not settings.debug,
    allow_methods=["*"],
    allow_headers=["*"],
)

prefix = settings.api_prefix
app.include_router(health.router, prefix=prefix)
app.include_router(bootstrap.router, prefix=prefix)
app.include_router(auth.router, prefix=prefix)
app.include_router(domains.router, prefix=prefix)
app.include_router(graph.router, prefix=prefix)
app.include_router(gis.router, prefix=prefix)
app.include_router(twins.router, prefix=prefix)
app.include_router(simulations.router, prefix=prefix)
app.include_router(satellite.router, prefix=prefix)
app.include_router(ai.router, prefix=prefix)
app.include_router(haptics.router, prefix=prefix)
app.include_router(education.router, prefix=prefix)
app.include_router(analytics.router, prefix=prefix)
app.include_router(plugins.router, prefix=prefix)
app.include_router(admin.router, prefix=prefix)
app.include_router(notifications.router, prefix=prefix)
app.include_router(timeline.router, prefix=prefix)
app.include_router(collab.router, prefix=prefix)
app.include_router(processing.router, prefix=prefix)
app.include_router(stac.router, prefix=prefix)
app.include_router(assets.router, prefix=prefix)
app.include_router(journal.router, prefix=prefix)
app.include_router(ws.router, prefix=prefix)
app.include_router(observability.router)
