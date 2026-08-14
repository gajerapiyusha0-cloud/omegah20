# Deployment

## Compose

`docker compose up --build` starts PostGIS, Redis, API, and the Next.js frontend.

Remaining connectors (profiles):

- `docker compose --profile worker up` — Celery worker + Flower (`:5555`)
- `docker compose --profile sso up` — local campus OIDC issuer (`:8081`)
- `docker compose --profile graph up` — Neo4j Bolt (`:7687`)

Without Docker, `make remaining` starts Redis and prepares Neo4j. Run `scripts/start-oidc.sh` for SSO, then launch the API with:

```
NEO4J_URI=bolt://127.0.0.1:7687 NEO4J_PASSWORD=geotwinverse \
OIDC_ISSUER=http://127.0.0.1:8081 OIDC_CLIENT_ID=geotwinverse-dev \
OIDC_REDIRECT_URI=http://localhost:3000/oidc/callback
```

Set production secrets:

- `SECRET_KEY`
- `DATABASE_URL`
- `CORS_ORIGINS`
- optional `OPENAI_API_KEY`, `CESIUM_ION_TOKEN`, Copernicus credentials

## Kubernetes

Kubernetes starter manifests live in `k8s/platform.yaml`. Prometheus can scrape `/metrics`.

## CI

GitHub Actions runs backend pytest on SQLite and frontend Vitest + `tsc`.
