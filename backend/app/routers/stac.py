"""STAC-shaped catalog so clients can switch to live Copernicus later."""

from datetime import datetime, timezone

from fastapi import APIRouter

from app.services.gis import synthetic_ndvi

router = APIRouter(prefix="/stac", tags=["stac"])


@router.get("/")
def root() -> dict:
    return {
        "type": "Catalog",
        "id": "geotwinverse-stac",
        "stac_version": "1.0.0",
        "description": "Proxy STAC catalog. Replace with Copernicus STAC when credentials exist.",
        "links": [{"rel": "search", "href": "/api/v1/stac/search", "type": "application/geo+json"}],
    }


@router.get("/search")
def search(bbox: str = "-124,48,-123,49", datetime_range: str = "2024-01-01/2025-12-31") -> dict:
    ndvi = synthetic_ndvi(seed=42)
    now = datetime.now(timezone.utc).isoformat()
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "stac_version": "1.0.0",
                "id": "S2A_proxy_canopy",
                "collection": "sentinel-2-l2a",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-123.5, 48.3], [-123.2, 48.3], [-123.2, 48.55], [-123.5, 48.55], [-123.5, 48.3]]],
                },
                "properties": {
                    "datetime": now,
                    "platform": "sentinel-2a",
                    "eo:cloud_cover": 8.2,
                    "geotwin:ndvi_mean": ndvi["ndvi_mean"],
                    "bbox": bbox,
                    "datetime_range": datetime_range,
                },
                "assets": {
                    "ndvi": {"href": "/api/v1/satellite/indices?scene=canopy-reserve", "type": "application/json"},
                },
            }
        ],
    }
