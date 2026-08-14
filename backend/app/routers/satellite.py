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


def _classify(ndvi: float) -> str:
    if ndvi < 0.1:
        return "bare-or-water"
    if ndvi < 0.3:
        return "sparse-vegetation"
    if ndvi < 0.6:
        return "moderate-vegetation"
    return "dense-vegetation"
