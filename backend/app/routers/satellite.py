from fastapi import APIRouter

from app.services.gis import synthetic_ndvi

router = APIRouter(prefix="/satellite", tags=["satellite"])


@router.get("/status")
def status() -> dict:
    return {
        "provider": "Copernicus Sentinel (proxy)",
        "live": False,
        "products": ["S2-L2A", "NDVI", "NDWI", "land-cover"],
        "note": "Live STAC access activates when COPERNICUS credentials are set.",
    }


@router.get("/indices")
def indices(scene: str = "canopy-reserve") -> dict:
    seed = abs(hash(scene)) % 10_000
    payload = synthetic_ndvi(seed=seed)
    payload["scene"] = scene
    payload["classification"] = _classify(payload["ndvi_mean"])
    return payload


@router.get("/compare")
def compare(before: str = "2024-06", after: str = "2025-06") -> dict:
    a = synthetic_ndvi(seed=24)
    b = synthetic_ndvi(seed=31)
    return {
        "before": {"label": before, "ndvi_mean": a["ndvi_mean"]},
        "after": {"label": after, "ndvi_mean": b["ndvi_mean"]},
        "delta": round(b["ndvi_mean"] - a["ndvi_mean"], 4),
        "interpretation": "Increase suggests greening; decrease may indicate stress, harvest, or cloud contamination.",
    }


@router.get("/landcover")
def landcover(scene: str = "canopy-reserve") -> dict:
    payload = indices(scene)
    grid = payload["grid"]
    counts = {"water": 0, "bare": 0, "sparse": 0, "moderate": 0, "dense": 0}
    for row in grid:
        for value in row:
            if value < 0.05:
                counts["water"] += 1
            elif value < 0.2:
                counts["bare"] += 1
            elif value < 0.4:
                counts["sparse"] += 1
            elif value < 0.65:
                counts["moderate"] += 1
            else:
                counts["dense"] += 1
    return {"scene": scene, "counts": counts, "classification": payload["classification"]}


@router.get("/disaster")
def disaster(hazard: str = "flood", intensity: float = 0.6) -> dict:
    return {
        "hazard": hazard,
        "intensity": intensity,
        "advisory": "Use twins and flood/climate engines for scenario comparison. This endpoint is a decision-support sketch, not an operational warning.",
        "recommended_twins": ["aurora-harbor-city", "delta-wetlands", "canopy-reserve"],
        "haptic": "col.emergency" if intensity >= 0.8 else "env.wind",
    }


def _classify(ndvi: float) -> str:
    if ndvi < 0.1:
        return "bare-or-water"
    if ndvi < 0.3:
        return "sparse-vegetation"
    if ndvi < 0.6:
        return "moderate-vegetation"
    return "dense-vegetation"
