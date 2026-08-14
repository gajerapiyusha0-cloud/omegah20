#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="$HOME/.local/bin:$PATH"
export PYTHONPATH="$ROOT/backend"

if [[ ! -f "$ROOT/frontend/.env.local" ]]; then
  cp "$ROOT/frontend/.env.local.example" "$ROOT/frontend/.env.local"
fi

echo "Starting Virtual GeoTwinVerse API on :8000 and web on :3000"
cd "$ROOT/backend"
python3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 &
API_PID=$!
cd "$ROOT/frontend"
npm run dev -- --port 3000 --hostname 0.0.0.0 &
WEB_PID=$!

trap 'kill $API_PID $WEB_PID 2>/dev/null || true' INT TERM
wait
