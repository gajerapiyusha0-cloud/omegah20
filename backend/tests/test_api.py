import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture
def client():
    with TestClient(app) as test_client:
        yield test_client


def test_health_and_domain_count(client: TestClient):
    res = client.get("/api/v1/health")
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "ok"
    assert body["domains"] >= 300


def test_domain_catalog_and_lookup(client: TestClient):
    res = client.get("/api/v1/domains")
    assert res.status_code == 200
    domains = res.json()
    assert len(domains) >= 300
    slugs = {d["slug"] for d in domains}
    assert "artificial-intelligence" in slugs
    assert "gis" in slugs
    one = client.get("/api/v1/domains/artificial-intelligence")
    assert one.status_code == 200
    assert one.json()["name"] == "Artificial Intelligence"


def test_semantic_search(client: TestClient):
    res = client.get("/api/v1/graph/search", params={"q": "remote sensing climate"})
    assert res.status_code == 200
    results = res.json()["results"]
    assert len(results) >= 1


def test_gis_measure_and_convert(client: TestClient):
    measure = client.post(
        "/api/v1/gis/measure",
        json={"from_lon": 0, "from_lat": 0, "to_lon": 0, "to_lat": 1},
    )
    assert measure.status_code == 200
    assert 110_000 < measure.json()["meters"] < 112_000
    conv = client.post(
        "/api/v1/gis/convert",
        json={"x": 0, "y": 0, "from_crs": "EPSG:4326", "to_crs": "EPSG:3857"},
    )
    assert conv.status_code == 200
    assert abs(conv.json()["x"]) < 1e-6


def test_simulation_orbit_and_flood(client: TestClient):
    orbit = client.post(
        "/api/v1/simulations/run",
        json={"engine": "orbit", "name": "ISS", "parameters": {"altitude_km": 400}},
    )
    assert orbit.status_code == 200
    assert 80 < orbit.json()["result"]["period_min"] < 100
    flood = client.post(
        "/api/v1/simulations/run",
        json={"engine": "flood", "name": "surge", "parameters": {"rain_mm": 120, "surge_m": 1.2}},
    )
    assert flood.status_code == 200
    assert flood.json()["result"]["peak_depth_m"] > 0


def test_haptic_patterns_and_play(client: TestClient):
    listing = client.get("/api/v1/haptics/patterns")
    assert listing.status_code == 200
    assert len(listing.json()) == 50
    play = client.post("/api/v1/haptics/play", json={"pattern_id": "sel.object"})
    assert play.status_code == 200
    assert play.json()["hardware_required"] is False


def test_twins_and_satellite(client: TestClient):
    twins = client.get("/api/v1/twins")
    assert twins.status_code == 200
    assert len(twins.json()) >= 8
    sat = client.get("/api/v1/satellite/indices", params={"scene": "canopy-reserve"})
    assert sat.status_code == 200
    assert "ndvi_mean" in sat.json()


def test_ai_assistant(client: TestClient):
    res = client.post("/api/v1/ai/assist", json={"message": "Explain GIS and teach me NDVI"})
    assert res.status_code == 200
    body = res.json()
    assert body["intent"] in {"tutor", "geospatial", "search"}
    assert "reply" in body


def test_bootstrap_payload(client: TestClient):
    res = client.get("/api/v1/bootstrap")
    assert res.status_code == 200
    body = res.json()
    assert len(body["domains"]) >= 300
    assert len(body["twins"]) >= 8
    assert len(body["haptics"]) == 50


def test_auth_register_login(client: TestClient):
    email = "tester@geotwinverse.local"
    client.post(
        "/api/v1/auth/register",
        json={"email": email, "password": "testharbor", "display_name": "Tester"},
    )
    login = client.post("/api/v1/auth/login", data={"username": email, "password": "testharbor"})
    assert login.status_code == 200
    token = login.json()["access_token"]
    me = client.get("/api/v1/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert me.status_code == 200
    assert me.json()["email"] == email


def test_quiz_hides_answers_and_grades(client: TestClient):
    quiz = client.get("/api/v1/learn/quiz/gis")
    assert quiz.status_code == 200
    questions = quiz.json()["questions"]
    assert "answer" not in questions[0]
    graded = client.post("/api/v1/learn/quiz/gis/grade", json={"answers": [0, 0, 0]})
    assert graded.status_code == 200
    assert graded.json()["score"] == 100


def test_plugins_analytics_admin_timeline(client: TestClient):
    plugins = client.get("/api/v1/plugins")
    assert plugins.status_code == 200
    assert len(plugins.json()) >= 8
    overview = client.get("/api/v1/analytics/overview")
    assert overview.json()["domains"] >= 300
    admin = client.get("/api/v1/admin/console")
    assert admin.json()["haptic_patterns"] == 50
    timeline = client.get("/api/v1/timeline")
    assert len(timeline.json()) >= 5
    notes = client.get("/api/v1/notifications")
    assert len(notes.json()) >= 3


def test_gis_buffer_and_landcover(client: TestClient):
    buf = client.post(
        "/api/v1/gis/buffer",
        json={"geometry": {"type": "Point", "coordinates": [0, 0]}, "meters": 1000},
    )
    assert buf.status_code == 200
    assert buf.json()["geometry"]["type"] in {"Polygon", "MultiPolygon"}
    cover = client.get("/api/v1/satellite/landcover", params={"scene": "canopy-reserve"})
    assert cover.status_code == 200
    assert "counts" in cover.json()
    graph = client.get("/api/v1/graph/domain/gis")
    assert graph.status_code == 200
    assert len(graph.json()["nodes"]) >= 1


def test_remaining_platform_modules(client: TestClient):
    assert client.get("/api/v1/stac/search").status_code == 200
    hist = client.get("/api/v1/processing/histogram")
    assert hist.status_code == 200
    assert len(hist.json()["counts"]) >= 4
    assets = client.get("/api/v1/assets")
    assert len(assets.json()) >= 6
    note = client.post("/api/v1/journal", json={"title": "Harbor", "body": "surge watch"})
    assert note.status_code == 200
    code = client.post("/api/v1/ai/codegen", json={"message": "GIS"})
    assert "client.py" in code.json()["files"]
    path = client.get("/api/v1/ai/path", params={"slug": "gis"})
    assert len(path.json()["steps"]) >= 4
    cypher = client.get("/api/v1/graph/export/cypher")
    assert cypher.json()["dialect"] == "cypher"
    metrics = client.get("/metrics")
    assert metrics.status_code == 200
    assert "geotwin_up" in metrics.text
