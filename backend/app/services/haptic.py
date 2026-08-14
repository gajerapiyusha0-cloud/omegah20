from app.data.haptics import HAPTIC_PATTERNS

_INDEX = {p["id"]: p for p in HAPTIC_PATTERNS}


def list_patterns(category: str | None = None) -> list[dict]:
    if not category:
        return HAPTIC_PATTERNS
    return [p for p in HAPTIC_PATTERNS if p["category"] == category]


def resolve(pattern_id: str, intensity: float | None = None) -> dict:
    pattern = _INDEX.get(pattern_id)
    if not pattern:
        raise KeyError(pattern_id)
    event = dict(pattern)
    if intensity is not None:
        event["intensity"] = max(0.0, min(1.0, intensity))
    event["fallback"] = "noop"
    event["channels"] = ["vibration-api", "gamepad", "noop"]
    return event
