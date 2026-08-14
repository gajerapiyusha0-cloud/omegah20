#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="$HOME/.local/bin:$PATH"
export PYTHONPATH="$ROOT/backend"
export REDIS_URL="${REDIS_URL:-redis://127.0.0.1:6379/0}"
NEO4J_HOME="${NEO4J_HOME:-$HOME/opt/neo4j-community-5.26.0}"

echo "Starting remaining GeoTwinVerse services: Redis, Celery, Flower, OIDC, Neo4j, Beat, Nginx"

if ! redis-cli ping >/dev/null 2>&1; then
  redis-server --port 6379 --bind 127.0.0.1 --daemonize yes --save ""
  sleep 0.5
fi
redis-cli ping

if ! redis-cli ping >/dev/null 2>&1; then
  redis-server --port 6379 --bind 127.0.0.1 --daemonize yes --save ""
  sleep 0.5
fi
redis-cli ping

if [ -x "$NEO4J_HOME/bin/neo4j" ]; then
  CONF="$NEO4J_HOME/conf/neo4j.conf"
  grep -q "server.bolt.listen_address=127.0.0.1:7687" "$CONF" 2>/dev/null || {
    cat >> "$CONF" <<'EOF'
server.default_listen_address=127.0.0.1
server.bolt.listen_address=127.0.0.1:7687
server.http.listen_address=127.0.0.1:7474
server.memory.heap.initial_size=512m
server.memory.heap.max_size=512m
server.memory.pagecache.size=256m
EOF
  }
  if [ ! -f "$NEO4J_HOME/data/dbms/auth.ini" ] && [ ! -d "$NEO4J_HOME/data/databases/neo4j" ]; then
    "$NEO4J_HOME/bin/neo4j-admin" dbms set-initial-password geotwinverse || true
  fi
  "$NEO4J_HOME/bin/neo4j" status >/dev/null 2>&1 || "$NEO4J_HOME/bin/neo4j" start
fi

if command -v nginx >/dev/null 2>&1; then
  if ! curl -sf -o /dev/null http://127.0.0.1:8080/api/v1/health; then
    mkdir -p /tmp/geotwin-nginx/{body,proxy,fastcgi,uwsgi,scgi}
    sudo nginx -c "$ROOT/nginx/local.conf" 2>/dev/null || nginx -c "$ROOT/nginx/local.conf" || true
  fi
fi

echo "Remaining connectors use:"
echo "  NEO4J_URI=bolt://127.0.0.1:7687"
echo "  NEO4J_USER=neo4j"
echo "  NEO4J_PASSWORD=geotwinverse"
echo "  OIDC_ISSUER=http://127.0.0.1:8081"
echo "  OIDC_CLIENT_ID=geotwinverse-dev"
echo "  OIDC_REDIRECT_URI=http://localhost:3000/oidc/callback"
echo "  Edge proxy http://127.0.0.1:8080"
echo "Start OIDC, Flower, Celery worker, and Celery beat in separate terminals."
