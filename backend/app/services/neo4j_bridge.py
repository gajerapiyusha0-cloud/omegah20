"""Optional Neo4j dual-write. Defaults to an in-process mirror."""

from __future__ import annotations

from app.config import get_settings

_MIRROR: list[str] = []


def sync_statements(statements: list[str]) -> dict:
    settings = get_settings()
    _MIRROR.extend(statements)
    uri = getattr(settings, "neo4j_uri", "") or ""
    if not uri:
        return {
            "synced": len(statements),
            "backend": "memory",
            "total": len(_MIRROR),
            "note": "Set NEO4J_URI to dual-write to a Bolt server.",
        }
    try:
        from neo4j import GraphDatabase  # type: ignore

        driver = GraphDatabase.driver(uri, auth=(settings.neo4j_user, settings.neo4j_password))
        with driver.session() as session:
            for stmt in statements:
                session.run(stmt)
        driver.close()
        return {"synced": len(statements), "backend": "neo4j", "uri": uri}
    except Exception as exc:
        return {"synced": 0, "backend": "memory", "error": str(exc)[:200], "total": len(_MIRROR)}


def mirror_size() -> int:
    return len(_MIRROR)
