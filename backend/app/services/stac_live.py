"""Live Sentinel-2 STAC via Element84 Earth Search, with local fallback."""

from __future__ import annotations

import httpx

from app.services.gis import synthetic_ndvi

EARTH_SEARCH = "https://earth-search.aws.element84.com/v1/search"


def parse_bbox(bbox: str) -> list[float]:
    parts = [float(p.strip()) for p in bbox.split(",") if p.strip()]
    if len(parts) != 4:
        return [-124.0, 48.0, -123.0, 49.0]
    return parts


def _rfc3339_interval(datetime_range: str) -> str:
    raw = datetime_range.replace(" ", "")
    if "T" in raw:
        return raw
    if "/" in raw:
        start, end = raw.split("/", 1)
        return f"{start}T00:00:00Z/{end}T23:59:59Z"
    return f"{raw}T00:00:00Z/{raw}T23:59:59Z"


def live_search(bbox: str, datetime_range: str, limit: int = 5) -> dict:
    payload = {
        "collections": ["sentinel-2-l2a"],
        "bbox": parse_bbox(bbox),
        "datetime": _rfc3339_interval(datetime_range),
        "limit": limit,
        "query": {"eo:cloud_cover": {"lt": 40}},
    }
    with httpx.Client(timeout=8.0) as client:
        response = client.post(EARTH_SEARCH, json=payload)
        response.raise_for_status()
        data = response.json()
    features = []
    for item in data.get("features", [])[:limit]:
        props = item.get("properties") or {}
        assets = item.get("assets") or {}
        thumb = (assets.get("thumbnail") or assets.get("visual") or {}).get("href")
        features.append(
            {
                "type": "Feature",
                "stac_version": item.get("stac_version", "1.0.0"),
                "id": item.get("id"),
                "collection": item.get("collection", "sentinel-2-l2a"),
                "geometry": item.get("geometry"),
                "properties": {
                    "datetime": props.get("datetime"),
                    "platform": props.get("platform"),
                    "eo:cloud_cover": props.get("eo:cloud_cover"),
                    "live": True,
                },
                "assets": {"thumbnail": {"href": thumb, "type": "image/jpeg"}} if thumb else {},
            }
        )
    return {
        "type": "FeatureCollection",
        "features": features,
        "source": "earth-search.aws.element84.com",
        "live": True,
        "context": data.get("context", {}),
    }


def proxy_search(bbox: str, datetime_range: str) -> dict:
    ndvi = synthetic_ndvi(seed=42)
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
                    "datetime": datetime_range,
                    "platform": "sentinel-2a",
                    "eo:cloud_cover": 8.2,
                    "geotwin:ndvi_mean": ndvi["ndvi_mean"],
                    "live": False,
                    "bbox": bbox,
                },
                "assets": {"ndvi": {"href": "/api/v1/satellite/indices?scene=canopy-reserve", "type": "application/json"}},
            }
        ],
        "source": "geotwinverse-proxy",
        "live": False,
    }


def search_with_fallback(bbox: str, datetime_range: str, limit: int = 5) -> dict:
    try:
        result = live_search(bbox, datetime_range, limit=limit)
        if result.get("features"):
            return result
    except Exception as exc:
        fallback = proxy_search(bbox, datetime_range)
        fallback["error"] = str(exc)[:200]
        return fallback
    return proxy_search(bbox, datetime_range)
