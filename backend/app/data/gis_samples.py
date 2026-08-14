"""Sample GIS layers used when live satellite feeds are unavailable."""

GIS_FEATURES: list[dict] = [
    {
        "name": "Aurora Harbor",
        "layer": "cities",
        "geometry": {"type": "Point", "coordinates": [-122.4194, 37.7749]},
        "properties": {"population": 874000, "heat": 0.71},
    },
    {
        "name": "Helix Campus",
        "layer": "campuses",
        "geometry": {"type": "Point", "coordinates": [-1.2577, 51.7520]},
        "properties": {"population": 24000, "heat": 0.22},
    },
    {
        "name": "Canopy Reserve",
        "layer": "forests",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-123.50, 48.30],
                [-123.20, 48.30],
                [-123.20, 48.55],
                [-123.50, 48.55],
                [-123.50, 48.30],
            ]],
        },
        "properties": {"ndvi": 0.68, "heat": 0.18},
    },
    {
        "name": "Pacific Fault Sample",
        "layer": "hazards",
        "geometry": {"type": "LineString", "coordinates": [[-123.0, 37.2], [-122.2, 37.9], [-121.6, 38.4]]},
        "properties": {"hazard": "seismic", "heat": 0.84},
    },
    {
        "name": "Delta Wetlands",
        "layer": "wetlands",
        "geometry": {"type": "Point", "coordinates": [4.8952, 52.3702]},
        "properties": {"habitat": 0.77, "heat": 0.31},
    },
    {
        "name": "Amber Fields",
        "layer": "agriculture",
        "geometry": {"type": "Point", "coordinates": [-93.6250, 41.5868]},
        "properties": {"ndvi": 0.54, "heat": 0.44},
    },
    {
        "name": "Volta Grid Hub",
        "layer": "energy",
        "geometry": {"type": "Point", "coordinates": [12.5683, 55.6761]},
        "properties": {"capacity_mw": 1320, "heat": 0.52},
    },
    {
        "name": "Metro Arteries",
        "layer": "transport",
        "geometry": {"type": "LineString", "coordinates": [[139.70, 35.68], [139.76, 35.68], [139.78, 35.71]]},
        "properties": {"ridership": 182000, "heat": 0.63},
    },
]
