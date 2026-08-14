from fastapi import APIRouter, Query

from app.services.stac_live import search_with_fallback

router = APIRouter(prefix="/stac", tags=["stac"])


@router.get("/")
def root() -> dict:
    return {
        "type": "Catalog",
        "id": "geotwinverse-stac",
        "stac_version": "1.0.0",
        "description": "Live Sentinel-2 search via Element84 Earth Search, with local fallback.",
        "links": [
            {"rel": "search", "href": "/api/v1/stac/search", "type": "application/geo+json"},
            {"rel": "external", "href": "https://earth-search.aws.element84.com/v1", "type": "application/json"},
        ],
    }


@router.get("/search")
def search(
    bbox: str = Query("-123.6,48.3,-123.2,48.6"),
    datetime_range: str = Query("2024-06-01/2024-08-31"),
    limit: int = Query(5, le=20),
) -> dict:
    return search_with_fallback(bbox, datetime_range, limit=limit)
