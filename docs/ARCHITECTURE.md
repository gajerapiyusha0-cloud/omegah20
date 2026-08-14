# Virtual GeoTwinVerse Architecture

## Layer map

```
Client (web, tablet, future VR)
  Experience: Next.js HUD, R3F universe, Cesium GIS, haptics, voice
Intelligence: FastAPI AI router, semantic search, learning paths
GIS: GeoJSON features, measurement, CRS, heatmap, Cesium viewer
Digital twins: typed twins + telemetry ticks + documented assumptions
Knowledge: 300+ domains, graph nodes/edges
Simulation: flood, climate, traffic, epidemic, NDVI, orbit
Platform: SQLAlchemy, optional PostGIS, Redis/Celery, Docker, Actions
```

## Design principles

1. **Spatial-first** — knowledge is reached by navigating space, not page trees.
2. **Hardware-optional haptics** — every cue has a no-op channel.
3. **Explainable assistance** — the AI states its routing method and citations.
4. **Assumptions are first-class** — twins and simulations publish what they do *not* claim.
5. **Open standards** — GeoJSON, EPSG codes, JWT, OpenAPI.

## Backend modules

| Router | Responsibility |
| --- | --- |
| `/api/v1/health` | Liveness and domain count |
| `/api/v1/auth` | Register, login, profile |
| `/api/v1/domains` | Catalog, categories, lessons |
| `/api/v1/graph` | Semantic search, constellation, neighborhood |
| `/api/v1/gis` | Features, measure, convert, heatmap |
| `/api/v1/twins` | Twin CRUD-lite, tick, timeseries |
| `/api/v1/simulations` | Engines and runs |
| `/api/v1/satellite` | NDVI/NDWI proxy |
| `/api/v1/ai` | Assistant |
| `/api/v1/haptics` | Pattern catalog and play |
| `/api/v1/learn` | Quizzes and learning progress |
| `/api/v1/analytics` | Platform metrics |
| `/api/v1/plugins` | Marketplace catalog |
| `/api/v1/admin` | Administration console |
| `/api/v1/notifications` | Spatial alerts |
| `/api/v1/collab` | Collaboration rooms + websocket |
| `/api/v1/timeline` | Historical knowledge events |

Geometry is stored as GeoJSON so the API runs on SQLite in CI and PostGIS in Docker. Shapely and pyproj perform analysis without requiring GDAL at runtime (GDAL remains in the Docker image for future raster jobs).

## Haptic abstraction

Patterns live in `backend/app/data/haptics.py` (50 ids). `POST /haptics/play` resolves intensity and waveform. The browser maps events to:

1. Gamepad `dual-rumble` if a controller is connected
2. `navigator.vibrate` on supported mobile browsers
3. Silent success (`noop`) everywhere else

## Frontend modes

- **Universe** — Earth + constellation + twin beacons
- **GIS** — CesiumJS OSM globe
- **Graph** — semantic search panel
- **Twin** — live state inspector
- **Sim** — simulation studio
- **Learn** — domain holographic briefing

## Security

- JWT access tokens (HS256); change `SECRET_KEY` in production
- Passwords hashed with PBKDF2-SHA256
- CORS allow-list via `CORS_ORIGINS`
- No secrets committed; Copernicus and OpenAI keys are optional env vars

## Roadmap

**Phase 4+ connectors** (credentials / cluster, not missing app code): live Copernicus STAC, hosted Neo4j, OIDC SSO, OpenXR hardware. The APIs, plugin SDK, Cypher export, and STAC proxy are in this repository.

## Accessibility

- Skip link, `:focus-visible` rings, `prefers-reduced-motion`
- Search and assistant are keyboard operable
- Haptic focus pattern `col.a11y` is reserved for future screen-reader pairing
