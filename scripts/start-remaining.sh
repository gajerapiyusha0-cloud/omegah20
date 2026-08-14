#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="$HOME/.local/bin:$PATH"
export PYTHONPATH="$ROOT/backend"
export REDIS_URL="${REDIS_URL:-redis://127.0.0.1:6379/0}"

echo "Starting remaining GeoTwinVerse services: Redis + Celery worker"

if ! redis-cli ping >/dev/null 2>&1; then
  redis-server --port 6379 --bind 127.0.0.1 --daemonize yes --save ""
  sleep 0.5
fi
redis-cli ping

cd "$ROOT/backend"
exec celery -A app.worker.celery_app worker --loglevel=INFO --concurrency=2