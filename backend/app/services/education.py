from __future__ import annotations

from app.models import KnowledgeDomain


def quiz_for_domain(domain: KnowledgeDomain) -> dict:
    distractors = [
        "Cartography",
        "Thermodynamics",
        "Macroeconomics",
        "Music Theory",
        "Constitutional Law",
    ]
    options = [domain.category, *[d for d in distractors if d != domain.category][:3]]
    return {
        "domain": domain.slug,
        "title": f"{domain.name} checkpoint",
        "questions": [
            {
                "id": "q1",
                "prompt": f"Which constellation contains {domain.name}?",
                "choices": options,
                "answer": 0,
            },
            {
                "id": "q2",
                "prompt": f"A GeoTwinVerse lab for {domain.name} is best used to…",
                "choices": [
                    "Run an interactive simulation and inspect assumptions",
                    "Replace peer-reviewed literature",
                    "Disable haptic fallbacks",
                    "Delete the knowledge graph",
                ],
                "answer": 0,
            },
            {
                "id": "q3",
                "prompt": "Optional haptic feedback should…",
                "choices": [
                    "Remain fully optional with a software no-op channel",
                    "Be required to open domains",
                    "Block GIS measurements",
                    "Disable accessibility focus",
                ],
                "answer": 0,
            },
        ],
    }


def grade(payload: dict, submitted: list[int]) -> dict:
    questions = payload.get("questions") or []
    correct = 0
    detail = []
    for idx, question in enumerate(questions):
        choice = submitted[idx] if idx < len(submitted) else -1
        ok = choice == question["answer"]
        correct += int(ok)
        detail.append({"id": question["id"], "correct": ok})
    total = max(len(questions), 1)
    return {"score": round(100 * correct / total, 1), "correct": correct, "total": total, "detail": detail}
