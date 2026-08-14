.PHONY: backend-test frontend-test dev-backend dev-frontend

backend-test:
	cd backend && pip install -r requirements.txt && pytest -q

frontend-test:
	cd frontend && npm install && npm test

dev-backend:
	cd backend && PYTHONPATH=. uvicorn app.main:app --reload --port 8000

dev-frontend:
	cd frontend && npm run dev
