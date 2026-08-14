from app.data.domains import DOMAIN_CATALOG
from app.services.gis import haversine_m
from app.services.simulation import run_simulation


def test_catalog_size_unique_slugs():
    slugs = [d["slug"] for d in DOMAIN_CATALOG]
    assert len(DOMAIN_CATALOG) >= 300
    assert len(slugs) == len(set(slugs))


def test_haversine_zero():
    assert haversine_m(10, 20, 10, 20) == 0


def test_epidemic_peak_positive():
    result = run_simulation("epidemic", {"r0": 2.4, "days": 40, "population": 5000})
    assert result["peak_infected"] > 10
