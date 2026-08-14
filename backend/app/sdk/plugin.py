"""Minimal plugin contract for GeoTwinVerse extensions."""

from __future__ import annotations

from typing import Protocol


class GeoTwinPlugin(Protocol):
    id: str
    name: str
    category: str

    def enable(self) -> dict: ...

    def health(self) -> str: ...


class ExampleLoggingPlugin:
    id = "plugin.example.logging"
    name = "Request logging"
    category = "observability"

    def enable(self) -> dict:
        return {"enabled": True, "sink": "stdout"}

    def health(self) -> str:
        return "ok"


def load_example() -> GeoTwinPlugin:
    return ExampleLoggingPlugin()
