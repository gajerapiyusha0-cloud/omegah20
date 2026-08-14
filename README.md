# Virtual GeoTwinVerse

Immersive geospatial knowledge universe: a software-only research and learning platform that combines a 3D globe, 300+ academic domains, a semantic knowledge graph, digital twins, scientific simulations, Copernicus-style satellite indices, an AI assistant, and an optional haptic abstraction layer.

This repository is a working **Phase 1** implementation of the GeoTwinVerse Omega blueprint. It is modular so later phases (live STAC, Kubernetes, plugin SDK) can land without rewriting the core.

## What works today

- **Experience layer** — Next.js cinematic HUD, holographic panels, radial modes, keyboard/voice input, dark/light themes, reduced-motion CSS.
- **3D engine** — React Three Fiber universe with a procedural Earth, knowledge constellation (one sphere per domain), and twin markers.
- **GIS layer** — CesiumJS globe (OSM basemap, no Ion token required) plus FastAPI GeoJSON, haversine measurement, CRS conversion, heat maps.
- **Knowledge layer** — 360 unique domains with lessons, categories, and a seeded graph (`has_lab`, `related_to`, `cross_disciplinary`).
- **Digital twins** — City, campus, factory, forest, transport, energy, environment, laboratory, agriculture, and lunar outpost twins with state ticks and assumptions.
- **Simulations** — Flood, climate, traffic, SIR epidemic, NDVI phenology, Keplerian orbit.
- **Satellite proxy** — Synthetic Sentinel-2 NDVI/NDWI grids until Copernicus credentials are configured.
- **AI core** — Deterministic semantic router for search, tutoring, geospatial, simulation, code, and haptic intents. Optional LLM key can be added later without API changes.
- **Haptics** — 50 named patterns with Vibration API / gamepad rumble / no-op fallback. The product is fully usable without hardware.
- **Platform** — FastAPI, SQLite or PostGIS, Redis/Celery worker stub, Docker Compose, Nginx edge profile, GitHub Actions.

## Quick start (local)

Backend (SQLite, no Docker):

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
PYTHONPATH=. uvicorn app.main:app --reload --port 8000
```

API docs: http://localhost:8000/docs

Frontend:

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000

## Docker

```bash
docker compose up --build
```

- Web UI: http://localhost:3000  
- API: http://localhost:8000/api/v1/health  
- Optional edge proxy: `docker compose --profile edge up`

## Keyboard

| Key | Action |
| --- | --- |
| `/` | Focus spatial search |
| `U` | Universe mode |
| `G` | Cesium GIS mode |
| `Esc` | Close domain space |

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for layers, APIs, haptics, and the roadmap.

Demo credentials (seeded): `explorer@geotwinverse.local` / `explorer123`

## Testing

```bash
cd backend && PYTHONPATH=. pytest -q
cd frontend && npm test
```

## License

MIT
