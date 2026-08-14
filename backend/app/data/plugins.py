"""Extensible plugin marketplace catalog."""

PLUGIN_CATALOG: list[dict] = [
    {"id": "plugin.sentinel-stac", "name": "Sentinel STAC Connector", "category": "satellite", "status": "available", "summary": "Live Copernicus STAC search and asset streaming."},
    {"id": "plugin.neo4j-graph", "name": "Neo4j Graph Bridge", "category": "knowledge", "status": "available", "summary": "Dual-write knowledge nodes to Neo4j for deep traversal."},
    {"id": "plugin.cesium-ion", "name": "Cesium Ion Terrain", "category": "gis", "status": "available", "summary": "World terrain and 3D tiles when an Ion token is present."},
    {"id": "plugin.openai-tutor", "name": "LLM Tutor Adapter", "category": "ai", "status": "available", "summary": "Optional OpenAI/compatible tutoring on top of the semantic router."},
    {"id": "plugin.haptic-openxr", "name": "OpenXR Haptics", "category": "haptics", "status": "preview", "summary": "Routes haptic patterns to OpenXR action manifolds."},
    {"id": "plugin.citygml", "name": "CityGML Ingest", "category": "twins", "status": "preview", "summary": "Import CityGML/CityJSON campus and city shells."},
    {"id": "plugin.webrtc-collab", "name": "WebRTC Rooms", "category": "collaboration", "status": "preview", "summary": "Spatial voice and cursor sharing for twin walkthroughs."},
    {"id": "plugin.gdal-worker", "name": "GDAL Raster Worker", "category": "processing", "status": "available", "summary": "Celery jobs for COG pyramids, warp, and zonal stats."},
    {"id": "plugin.quiz-packs", "name": "Institutional Quiz Packs", "category": "education", "status": "available", "summary": "Load accredited question banks per domain."},
    {"id": "plugin.oidc", "name": "Enterprise OIDC", "category": "security", "status": "preview", "summary": "Campus SSO via OpenID Connect."},
    {"id": "plugin.ifctwin", "name": "IFC Factory Twin", "category": "twins", "status": "preview", "summary": "BIM/IFC to factory twin tessellation."},
    {"id": "plugin.timeline", "name": "Historical Timeline Pack", "category": "knowledge", "status": "available", "summary": "Era-linked events wired into the knowledge graph."},
]
