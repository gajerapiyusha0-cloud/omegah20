from fastapi import APIRouter

router = APIRouter(prefix="/assets", tags=["assets"])

LIBRARY = [
    {"id": "earth-proc", "kind": "shader", "name": "Procedural Earth", "format": "glsl"},
    {"id": "twin-harbor", "kind": "geojson", "name": "Aurora Harbor footprint", "format": "geojson"},
    {"id": "haptic-pack", "kind": "haptics", "name": "50-pattern lattice", "format": "json"},
    {"id": "domain-spheres", "kind": "mesh", "name": "Knowledge constellation instances", "format": "three"},
    {"id": "ndvi-grid", "kind": "raster", "name": "Synthetic Sentinel NDVI", "format": "json-grid"},
    {"id": "cesium-osm", "kind": "basemap", "name": "OpenStreetMap imagery", "format": "xyz"},
    {"id": "quiz-core", "kind": "content", "name": "Domain checkpoint quizzes", "format": "json"},
    {"id": "timeline-pack", "kind": "content", "name": "Knowledge timeline", "format": "json"},
]


@router.get("")
def list_assets(kind: str | None = None) -> list[dict]:
    if not kind:
        return LIBRARY
    return [a for a in LIBRARY if a["kind"] == kind]
