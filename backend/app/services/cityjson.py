"""CityJSON campus/city shell ingest for digital twins."""

from __future__ import annotations

from pathlib import Path

from sqlalchemy.orm import Session

from app.models import DigitalTwin

SAMPLE_PATH = Path(__file__).resolve().parent.parent / "data" / "samples" / "helix-campus.city.json"


def ingest_cityjson(db: Session, payload: dict, slug: str | None = None) -> dict:
    vertices = payload.get("vertices") or []
    objects = payload.get("CityObjects") or {}
    metadata = payload.get("metadata") or {}
    ident = slug or str(metadata.get("identifier") or metadata.get("title") or "cityjson-twin")
    ident = ident.lower().replace(" ", "-")[:160]
    lon, lat = _centroid(vertices)
    geometry = _footprint(vertices)
    existing = db.query(DigitalTwin).filter(DigitalTwin.slug == ident).first()
    if existing:
        existing.geojson = geometry
        existing.longitude = lon
        existing.latitude = lat
        state = dict(existing.state or {})
        state["cityjson_objects"] = len(objects)
        existing.state = state
        db.commit()
        db.refresh(existing)
        twin = existing
        created = False
    else:
        twin = DigitalTwin(
            slug=ident,
            name=str(metadata.get("title") or ident),
            twin_type="campus" if "campus" in ident else "city",
            description="Ingested CityJSON shell. Geometry is a convex footprint of vertices.",
            longitude=lon,
            latitude=lat,
            altitude=0.0,
            geojson=geometry,
            state={"cityjson_objects": len(objects), "vertices": len(vertices)},
            assumptions=["CityJSON vertices treated as lon/lat or local meters projected as relative offsets"],
        )
        db.add(twin)
        db.commit()
        db.refresh(twin)
        created = True
    return {
        "created": created,
        "slug": twin.slug,
        "objects": len(objects),
        "vertices": len(vertices),
        "longitude": twin.longitude,
        "latitude": twin.latitude,
        "format": payload.get("type") or "CityJSON",
    }


def load_sample() -> dict:
    import json

    return json.loads(SAMPLE_PATH.read_text())


def _centroid(vertices: list) -> tuple[float, float]:
    if not vertices:
        return -1.2577, 51.7520
    xs = [float(v[0]) for v in vertices]
    ys = [float(v[1]) for v in vertices]
    # CityJSON often uses projected metres; if values look like metres, keep Helix campus origin.
    if max(abs(xs[0]), abs(ys[0])) > 180:
        return -1.2577, 51.7520
    return sum(xs) / len(xs), sum(ys) / len(ys)


def _footprint(vertices: list) -> dict:
    if len(vertices) < 3:
        return {"type": "Point", "coordinates": [-1.2577, 51.7520]}
    coords = [[float(v[0]), float(v[1])] for v in vertices]
    if max(abs(coords[0][0]), abs(coords[0][1])) > 180:
        # local metres → small geographic box around Helix campus
        coords = [[-1.2577 + x / 111320, 51.7520 + y / 111320] for x, y, *_rest in vertices]
    ring = coords + [coords[0]]
    return {"type": "Polygon", "coordinates": [ring]}
