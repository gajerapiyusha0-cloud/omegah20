# Education and plugins

- Each domain exposes lessons, related nodes, and a three-question checkpoint quiz.
- `POST /learn/quiz/{slug}/grade` scores locally and stores progress when authenticated.
- Plugin marketplace lists connectors (STAC, Neo4j, OIDC, GDAL worker). Enablement is session-local until a persistence backend is attached.
