from fastapi import APIRouter

router = APIRouter(prefix="/timeline", tags=["timeline"])

EVENTS = [
    {"year": -300, "title": "Eratosthenes measures Earth", "domains": ["geodesy", "mathematics"]},
    {"year": 1609, "title": "Kepler's astronomy", "domains": ["astronomy", "physics"]},
    {"year": 1859, "title": "On the Origin of Species", "domains": ["biology", "evolutionary-biology"]},
    {"year": 1957, "title": "Sputnik and the space age", "domains": ["aerospace-engineering", "satellite-engineering"]},
    {"year": 1972, "title": "Landsat Earth observation", "domains": ["remote-sensing", "gis"]},
    {"year": 1999, "title": "IKONOS commercial high-res imagery", "domains": ["remote-sensing", "photogrammetry"]},
    {"year": 2014, "title": "Sentinel-1 radar constellation", "domains": ["satellite-engineering", "climate-science"]},
    {"year": 2015, "title": "Paris Agreement", "domains": ["climate-science", "public-policy"]},
    {"year": 2020, "title": "Operational digital twins in cities", "domains": ["digital-twin-engineering", "smart-cities"]},
]


@router.get("")
def timeline() -> list[dict]:
    return EVENTS
