# Virtual GeoTwinVerse

Immersive geospatial knowledge universe: a software-only research and learning platform that combines a 3D globe, 300+ academic domains, a semantic knowledge graph, digital twins, scientific simulations, Copernicus-style satellite indices, an AI assistant, and an optional haptic abstraction layer.

This repository implements the GeoTwinVerse Omega blueprint as a working research platform: immersive 3D knowledge navigation, GIS, twins, simulations, satellite proxies, education, plugins, collaboration, analytics, and optional haptics.

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
- **Education** — checkpoint quizzes, learning progress, historical timeline.
- **Collaboration** — websocket rooms for shared presence.
- **Plugins & admin** — marketplace catalog, analytics dashboard, administration console, spatial notifications.
- **GIS editing** — GeoJSON create, buffer, measure, heatmap, land-cover and disaster-assessment proxies.
- **Kubernetes** — starter manifests in `k8s/platform.yaml`.

## Quick start

```bash
make install
make dev
```

Then open http://localhost:3000 — API docs at http://localhost:8000/docs.

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
