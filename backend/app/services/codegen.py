from fastapi import APIRouter

from app.data.domains import DOMAIN_CATALOG

router = APIRouter(prefix="/ai", tags=["ai"])


def snippets_for(topic: str) -> dict:
    slug = topic.lower().replace(" ", "-")
    return {
        "language": "python",
        "topic": topic,
        "files": {
            "client.py": (
                "import httpx\n\n"
                "API = 'http://localhost:8000/api/v1'\n\n"
                f"def explore_{slug.replace('-', '_')}():\n"
                f"    r = httpx.get(f'{{API}}/graph/search', params={{'q': '{topic}'}})\n"
                "    r.raise_for_status()\n"
                "    return r.json()\n"
            ),
            "curl.sh": f"curl -s 'http://localhost:8000/api/v1/graph/search?q={slug}' | jq .",
        },
        "explainability": "Template codegen from the GeoTwinVerse SDK. Optional LLMs can rewrite comments.",
    }


def adaptive_path(slug: str | None) -> dict:
    domain = next((d for d in DOMAIN_CATALOG if d["slug"] == slug), DOMAIN_CATALOG[0])
    return {
        "domain": domain["slug"],
        "steps": [
            {"id": "orient", "title": f"Orient in {domain['name']}", "est_min": 8},
            {"id": "graph", "title": "Walk related_to links", "est_min": 10},
            {"id": "lab", "title": "Run the domain laboratory simulation", "est_min": 12},
            {"id": "spatial", "title": "Inspect a linked twin or GIS layer", "est_min": 10},
            {"id": "quiz", "title": "Complete the checkpoint quiz", "est_min": 6},
        ],
        "adaptive_rule": "If quiz score < 70, repeat lab + graph before advancing.",
    }
