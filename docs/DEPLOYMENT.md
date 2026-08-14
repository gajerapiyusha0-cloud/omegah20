# Deployment

## Compose

`docker compose up --build` starts PostGIS, Redis, API, and the Next.js frontend.

Set production secrets:

- `SECRET_KEY`
- `DATABASE_URL`
- `CORS_ORIGINS`
- optional `OPENAI_API_KEY`, `CESIUM_ION_TOKEN`, Copernicus credentials

## Kubernetes

Manifests are intentionally deferred to Phase 4. The images (`backend/Dockerfile`, `frontend/Dockerfile`) are the units to schedule behind Nginx or an ingress that mirrors `nginx/nginx.conf`.

## CI

GitHub Actions runs backend pytest on SQLite and frontend Vitest + `tsc`.
