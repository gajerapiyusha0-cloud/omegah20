"""Probe remaining runtime connectors without failing the API if one is down."""

from __future__ import annotations

import socket

from app.config import get_settings


def connector_status() -> dict:
    settings = get_settings()
    status = {
        "api": True,
        "web": _tcp("127.0.0.1", 3000),
        "redis": _tcp("127.0.0.1", 6379),
        "celery_flower": _tcp("127.0.0.1", 5555),
        "oidc": _tcp("127.0.0.1", 8081),
        "neo4j_bolt": _tcp("127.0.0.1", 7687) if settings.neo4j_uri else False,
        "nginx_edge": _tcp("127.0.0.1", 8080),
        "stac": True,
        "oidc_configured": bool(settings.oidc_issuer and settings.oidc_client_id),
        "neo4j_configured": bool(settings.neo4j_uri),
    }
    status["ready"] = all(
        status[key]
        for key in ("api", "redis", "stac")
    )
    return status


def _tcp(host: str, port: int, timeout: float = 0.15) -> bool:
    try:
        with socket.create_connection((host, port), timeout=timeout):
            return True
    except OSError:
        return False
