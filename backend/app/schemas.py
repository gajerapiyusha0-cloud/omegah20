from pydantic import BaseModel, Field


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserCreate(BaseModel):
    email: str
    password: str = Field(min_length=8)
    display_name: str = "Explorer"


class UserPublic(BaseModel):
    id: int
    email: str
    display_name: str
    locale: str
    haptic_enabled: bool
    theme: str

    model_config = {"from_attributes": True}


class DomainPublic(BaseModel):
    id: int
    slug: str
    name: str
    category: str
    summary: str
    color: str
    orbit: float
    inclination: float
    tags: list
    lesson_count: int

    model_config = {"from_attributes": True}


class GraphNodePublic(BaseModel):
    id: int
    slug: str
    title: str
    kind: str
    summary: str
    domain_id: int
    properties: dict

    model_config = {"from_attributes": True}


class GraphEdgePublic(BaseModel):
    id: int
    source_id: int
    target_id: int
    relation: str
    weight: float

    model_config = {"from_attributes": True}


class TwinPublic(BaseModel):
    id: int
    slug: str
    name: str
    twin_type: str
    description: str
    longitude: float
    latitude: float
    altitude: float
    geojson: dict
    state: dict
    assumptions: list

    model_config = {"from_attributes": True}


class SimulationRequest(BaseModel):
    engine: str = Field(description="flood | climate | traffic | epidemic | ndvi | orbit")
    name: str = "Untitled simulation"
    parameters: dict = Field(default_factory=dict)


class AssistantRequest(BaseModel):
    message: str
    locale: str = "en"
    context: dict = Field(default_factory=dict)


class HapticEvent(BaseModel):
    pattern_id: str
    intensity: float | None = None
    context: dict = Field(default_factory=dict)


class MeasureRequest(BaseModel):
    from_lon: float
    from_lat: float
    to_lon: float
    to_lat: float


class ConvertRequest(BaseModel):
    x: float
    y: float
    from_crs: str = "EPSG:4326"
    to_crs: str = "EPSG:3857"
