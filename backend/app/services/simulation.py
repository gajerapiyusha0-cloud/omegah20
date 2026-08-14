from __future__ import annotations

from math import exp

import numpy as np


def run_simulation(engine: str, parameters: dict) -> dict:
    engine = engine.lower().strip()
    runners = {
        "flood": _flood,
        "climate": _climate,
        "traffic": _traffic,
        "epidemic": _epidemic,
        "ndvi": _ndvi_trend,
        "orbit": _orbit,
    }
    if engine not in runners:
        raise ValueError(f"Unknown simulation engine: {engine}")
    result = runners[engine](parameters)
    result["engine"] = engine
    result["assumptions"] = result.get("assumptions", [])
    return result


def _flood(p: dict) -> dict:
    rain_mm = float(p.get("rain_mm", 80))
    surge_m = float(p.get("surge_m", 0.6))
    permeability = float(p.get("permeability", 0.35))
    depth = max(0.0, (rain_mm / 100.0) * (1 - permeability) + surge_m * 0.4)
    return {
        "peak_depth_m": round(depth, 3),
        "affected_fraction": round(min(0.95, depth / 2.2), 3),
        "timeline_h": [0, 3, 6, 12, 24],
        "depth_series_m": [0, depth * 0.4, depth * 0.85, depth, depth * 0.55],
        "assumptions": ["Bathtub inundation", "No storm-drain network"],
    }


def _climate(p: dict) -> dict:
    years = int(p.get("years", 30))
    forcing = float(p.get("forcing", 1.0))
    baseline = 14.2
    series = [round(baseline + 0.03 * i * forcing + 0.15 * np.sin(i / 3), 3) for i in range(years)]
    return {
        "unit": "degC",
        "series": series,
        "delta": round(series[-1] - series[0], 3),
        "assumptions": ["Linear forcing heuristic", "Not a GCM"],
    }


def _traffic(p: dict) -> dict:
    demand = float(p.get("demand", 1.0))
    capacity = float(p.get("capacity", 1.0))
    ratio = demand / max(capacity, 0.05)
    delay = 1.2 * exp(1.4 * (ratio - 1)) if ratio > 0.8 else ratio * 2
    return {
        "v_c_ratio": round(ratio, 3),
        "mean_delay_min": round(float(delay), 3),
        "throughput": round(min(demand, capacity) * 1800, 1),
        "assumptions": ["BPR-style congestion", "Single corridor"],
    }


def _epidemic(p: dict) -> dict:
    r0 = float(p.get("r0", 1.8))
    steps = int(p.get("days", 60))
    pop = int(p.get("population", 10000))
    s, i, r = pop - 10, 10, 0
    gamma = 0.18
    beta = r0 * gamma
    infected = []
    for _ in range(steps):
        new_i = beta * s * i / pop
        new_r = gamma * i
        s = max(0, s - new_i)
        i = max(0, i + new_i - new_r)
        r = r + new_r
        infected.append(int(i))
    return {
        "peak_infected": max(infected),
        "series": infected,
        "assumptions": ["SIR compartment model", "Homogeneous mixing"],
    }


def _ndvi_trend(p: dict) -> dict:
    months = int(p.get("months", 12))
    drought = float(p.get("drought", 0.2))
    base = 0.62
    series = [round(max(0.05, base - drought * 0.25 * np.sin(i / 2) - i * 0.004 * drought), 3) for i in range(months)]
    return {
        "series": series,
        "mean": round(float(np.mean(series)), 3),
        "assumptions": ["Phenology sinusoid plus drought stress"],
    }


def _orbit(p: dict) -> dict:
    altitude_km = float(p.get("altitude_km", 400))
    mu = 398600.4418
    r = 6371 + altitude_km
    period_min = 2 * np.pi * np.sqrt(r**3 / mu) / 60
    return {
        "period_min": round(float(period_min), 3),
        "velocity_kms": round(float(np.sqrt(mu / r)), 3),
        "assumptions": ["Spherical Earth two-body Kepler"],
    }
