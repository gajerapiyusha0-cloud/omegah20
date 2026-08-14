from math import atan2, cos, radians, sin, sqrt

import numpy as np
from pyproj import Transformer
from shapely.geometry import shape
from shapely.ops import transform as shp_transform


def haversine_m(lon1: float, lat1: float, lon2: float, lat2: float) -> float:
    r = 6371000.0
    p1, p2 = radians(lat1), radians(lat2)
    dphi = radians(lat2 - lat1)
    dl = radians(lon2 - lon1)
    a = sin(dphi / 2) ** 2 + cos(p1) * cos(p2) * sin(dl / 2) ** 2
    return 2 * r * atan2(sqrt(a), sqrt(1 - a))


def convert_coords(x: float, y: float, from_crs: str, to_crs: str) -> dict:
    transformer = Transformer.from_crs(from_crs, to_crs, always_xy=True)
    nx, ny = transformer.transform(x, y)
    return {"x": nx, "y": ny, "from_crs": from_crs, "to_crs": to_crs}


def feature_area_m2(geojson: dict) -> float | None:
    geom = shape(geojson)
    if geom.is_empty:
        return None
    transformer = Transformer.from_crs("EPSG:4326", "EPSG:3857", always_xy=True)
    projected = shp_transform(lambda x, y, z=None: transformer.transform(x, y), geom)
    if projected.geom_type in {"Polygon", "MultiPolygon"}:
        return float(projected.area)
    return None


def heatmap_points(features: list[dict]) -> list[dict]:
    points = []
    for feat in features:
        geom = feat.get("geometry") or {}
        props = feat.get("properties") or {}
        heat = float(props.get("heat", 0.5))
        if geom.get("type") == "Point":
            lon, lat = geom["coordinates"][:2]
            points.append({"longitude": lon, "latitude": lat, "weight": heat, "name": feat.get("name")})
        elif geom.get("type") in {"Polygon", "LineString"}:
            coords = geom["coordinates"]
            if geom.get("type") == "Polygon":
                coords = coords[0]
            lon = sum(c[0] for c in coords) / len(coords)
            lat = sum(c[1] for c in coords) / len(coords)
            points.append({"longitude": lon, "latitude": lat, "weight": heat, "name": feat.get("name")})
    return points


def synthetic_ndvi(seed: int = 7, size: int = 16) -> dict:
    rng = np.random.default_rng(seed)
    nir = rng.uniform(0.2, 0.9, (size, size))
    red = rng.uniform(0.05, 0.5, (size, size))
    green = rng.uniform(0.05, 0.45, (size, size))
    swir = rng.uniform(0.05, 0.6, (size, size))
    ndvi = (nir - red) / (nir + red + 1e-6)
    ndwi = (green - swir) / (green + swir + 1e-6)
    return {
        "size": size,
        "ndvi_mean": float(ndvi.mean()),
        "ndwi_mean": float(ndwi.mean()),
        "ndvi_min": float(ndvi.min()),
        "ndvi_max": float(ndvi.max()),
        "grid": ndvi.round(3).tolist(),
        "source": "synthetic-sentinel-2-proxy",
        "disclaimer": "Replace with Copernicus STAC when credentials are configured.",
    }


def synthetic_histogram(scene: str = "canopy-reserve", bins: int = 8) -> dict:
    grid = synthetic_ndvi(seed=abs(hash(scene)) % 10_000)
    cells = [v for row in grid["grid"] for v in row]
    lo, hi = min(cells), max(cells)
    width = (hi - lo) / max(bins, 1) or 1
    counts = [0] * bins
    for value in cells:
        idx = min(bins - 1, int((value - lo) / width))
        counts[idx] += 1
    return {"scene": scene, "bins": bins, "counts": counts, "min": lo, "max": hi}
