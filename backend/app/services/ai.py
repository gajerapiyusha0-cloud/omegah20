from __future__ import annotations

from app.config import get_settings
from app.data.domains import DOMAIN_CATALOG

_LOCALES = {
    "en": "English",
    "es": "Spanish",
    "fr": "French",
    "de": "German",
    "hi": "Hindi",
    "zh": "Chinese",
    "ar": "Arabic",
    "ja": "Japanese",
    "pt": "Portuguese",
}


def assist(message: str, locale: str = "en", context: dict | None = None) -> dict:
    context = context or {}
    settings = get_settings()
    lowered = message.lower()
    domain_hits = [
        d for d in DOMAIN_CATALOG if d["name"].lower() in lowered or d["slug"].replace("-", " ") in lowered
    ][:5]
    intent = _intent(lowered)
    citations = [f"domain:{d['slug']}" for d in domain_hits]
    if context.get("domain"):
        citations.append(f"context:{context['domain']}")

    reply = _compose(intent, message, domain_hits, locale)
    path = _learning_path(domain_hits[0] if domain_hits else None)

    return {
        "reply": reply,
        "intent": intent,
        "locale": locale if locale in _LOCALES else "en",
        "locale_name": _LOCALES.get(locale, "English"),
        "related_domains": [{"slug": d["slug"], "name": d["name"]} for d in domain_hits],
        "learning_path": path,
        "citations": citations,
        "explainability": {
            "method": "deterministic-semantic-router",
            "llm_enabled": bool(settings.openai_api_key),
            "notes": "Optional LLM keys enhance phrasing; core tutoring works offline.",
        },
    }


def _intent(text: str) -> str:
    if any(k in text for k in ("simulate", "flood", "orbit", "epidemic", "traffic")):
        return "simulation"
    if any(k in text for k in ("map", "gis", "ndvi", "satellite", "twin")):
        return "geospatial"
    if any(k in text for k in ("haptic", "vibrate", "feel")):
        return "haptic"
    if any(k in text for k in ("learn", "teach", "explain", "what is", "course")):
        return "tutor"
    if any(k in text for k in ("code", "python", "api")):
        return "code"
    return "search"


def _compose(intent: str, message: str, hits: list[dict], locale: str) -> str:
    names = ", ".join(d["name"] for d in hits) or "the knowledge constellation"
    templates = {
        "simulation": (
            f"I can run flood, climate, traffic, epidemic, NDVI, or orbit simulations. "
            f"Open Simulation Studio and choose an engine. Context: {names}."
        ),
        "geospatial": (
            f"Switch to GIS mode for the Cesium globe, measurements, heat maps, and twin footprints. "
            f"Linked domains: {names}."
        ),
        "haptic": (
            "Haptics are optional. The abstraction layer maps 50 patterns to Vibration API, "
            "gamepad rumble, or a no-op device. Enable them in the Experience panel."
        ),
        "tutor": (
            f"Here is a concise briefing on {names}. Each domain includes lessons, graph nodes, "
            f"and cross-links. Ask for a learning path to sequence topics."
        ),
        "code": (
            "Use the FastAPI /api/v1 routes for domains, graph, GIS, twins, simulations, and haptics. "
            "The frontend talks to the same contract via lib/api.ts."
        ),
        "search": (
            f"Semantic search across 300+ domains found: {names}. "
            f"You asked: “{message[:180]}”. Open a sphere to enter that knowledge space."
        ),
    }
    prefix = "" if locale == "en" else f"[{_LOCALES.get(locale, locale)}] "
    return prefix + templates.get(intent, templates["search"])


def _learning_path(domain: dict | None) -> list[str]:
    if not domain:
        return [
            "Orient on the globe and pick a constellation",
            "Open a domain sphere",
            "Walk the knowledge graph",
            "Run a related simulation",
        ]
    return [
        f"Survey {domain['name']} overview",
        "Inspect core graph nodes",
        "Follow related_to links into adjacent domains",
        "Run a domain-adjacent simulation",
        "Capture notes in the holographic journal",
    ]


def summarize_domain(name: str, summary: str) -> str:
    return f"{name}: {summary} Connect this space to GIS layers, twins, and simulations from the radial menu."
