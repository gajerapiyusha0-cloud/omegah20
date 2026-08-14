from fastapi import APIRouter, HTTPException

from app.data.plugins import PLUGIN_CATALOG

router = APIRouter(prefix="/plugins", tags=["plugins"])


@router.get("")
def list_plugins(category: str | None = None) -> list[dict]:
    if not category:
        return PLUGIN_CATALOG
    return [p for p in PLUGIN_CATALOG if p["category"] == category]


@router.get("/{plugin_id}")
def get_plugin(plugin_id: str) -> dict:
    for plugin in PLUGIN_CATALOG:
        if plugin["id"] == plugin_id:
            return plugin
    raise HTTPException(status_code=404, detail="Plugin not found")


@router.post("/{plugin_id}/enable")
def enable_plugin(plugin_id: str) -> dict:
    plugin = next((p for p in PLUGIN_CATALOG if p["id"] == plugin_id), None)
    if not plugin:
        raise HTTPException(status_code=404, detail="Plugin not found")
    return {"enabled": True, "plugin": plugin, "note": "Enablement is recorded in-session for Phase 2."}
