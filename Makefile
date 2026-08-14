.PHONY: install backend-test frontend-test test dev-backend dev-frontend dev

install:
	python3 -m pip install -r backend/requirements.txt
	cd frontend && npm install
	cp -n frontend/.env.local.example frontend/.env.local || true

backend-test:
	cd backend && PYTHONPATH=. pytest -q

frontend-test:
	cd frontend && npm test

test: backend-test frontend-test

dev-backend:
	cd backend && PYTHONPATH=. uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

dev-frontend:
	cd frontend && npm run dev -- --port 3000 --hostname 0.0.0.0

dev:
	bash scripts/dev.sh
