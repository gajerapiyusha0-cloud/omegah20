# API notes

Interactive OpenAPI: `/docs` (FastAPI Swagger).

Base path: `/api/v1`

Auth login uses OAuth2 password form (`username` = email).

Example:

```bash
curl -s localhost:8000/api/v1/graph/search?q=climate
curl -s -X POST localhost:8000/api/v1/simulations/run \
  -H 'content-type: application/json' \
  -d '{"engine":"orbit","name":"ISS","parameters":{"altitude_km":400}}'
```
