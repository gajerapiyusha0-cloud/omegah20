# Deployment

## Compose

`docker compose up --build` starts PostGIS, Redis, API, and the Next.js frontend.

Set production secrets:

- `SECRET_KEY`
- `DATABASE_URL`
- `CORS_ORIGINS`
- optional `OPENAI_API_KEY`, `CESIUM_ION_TOKEN`, Copernicus credentials

## Kubernetes

Kubernetes starter manifests live in `k8s/platform.yaml`. Prometheus can scrape `/metrics`.

## CI

GitHub Actions runs backend pytest on SQLite and frontend Vitest + `tsc`.
