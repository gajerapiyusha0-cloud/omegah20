from datetime import datetime

from sqlalchemy import JSON, Boolean, DateTime, Float, ForeignKey, Integer, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    display_name: Mapped[str] = mapped_column(String(120), default="Explorer")
    locale: Mapped[str] = mapped_column(String(16), default="en")
    haptic_enabled: Mapped[bool] = mapped_column(Boolean, default=True)
    theme: Mapped[str] = mapped_column(String(16), default="dark")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class KnowledgeDomain(Base):
    __tablename__ = "knowledge_domains"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    slug: Mapped[str] = mapped_column(String(160), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(200), index=True)
    category: Mapped[str] = mapped_column(String(80), index=True)
    summary: Mapped[str] = mapped_column(Text)
    color: Mapped[str] = mapped_column(String(16), default="#22d3ee")
    orbit: Mapped[float] = mapped_column(Float, default=0.0)
    inclination: Mapped[float] = mapped_column(Float, default=0.0)
    tags: Mapped[list] = mapped_column(JSON, default=list)
    lesson_count: Mapped[int] = mapped_column(Integer, default=4)

    nodes: Mapped[list["GraphNode"]] = relationship(back_populates="domain")


class GraphNode(Base):
    __tablename__ = "graph_nodes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    domain_id: Mapped[int] = mapped_column(ForeignKey("knowledge_domains.id"), index=True)
    slug: Mapped[str] = mapped_column(String(200), index=True)
    title: Mapped[str] = mapped_column(String(240))
    kind: Mapped[str] = mapped_column(String(64), default="concept")
    summary: Mapped[str] = mapped_column(Text, default="")
    properties: Mapped[dict] = mapped_column(JSON, default=dict)

    domain: Mapped[KnowledgeDomain] = relationship(back_populates="nodes")
    outgoing: Mapped[list["GraphEdge"]] = relationship(
        back_populates="source", foreign_keys="GraphEdge.source_id"
    )


class GraphEdge(Base):
    __tablename__ = "graph_edges"
    __table_args__ = (UniqueConstraint("source_id", "target_id", "relation"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    source_id: Mapped[int] = mapped_column(ForeignKey("graph_nodes.id"), index=True)
    target_id: Mapped[int] = mapped_column(ForeignKey("graph_nodes.id"), index=True)
    relation: Mapped[str] = mapped_column(String(80), default="related_to")
    weight: Mapped[float] = mapped_column(Float, default=1.0)

    source: Mapped[GraphNode] = relationship(foreign_keys=[source_id], back_populates="outgoing")
    target: Mapped[GraphNode] = relationship(foreign_keys=[target_id])


class DigitalTwin(Base):
    __tablename__ = "digital_twins"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    slug: Mapped[str] = mapped_column(String(160), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(200))
    twin_type: Mapped[str] = mapped_column(String(64), index=True)
    description: Mapped[str] = mapped_column(Text)
    longitude: Mapped[float] = mapped_column(Float)
    latitude: Mapped[float] = mapped_column(Float)
    altitude: Mapped[float] = mapped_column(Float, default=0.0)
    geojson: Mapped[dict] = mapped_column(JSON, default=dict)
    state: Mapped[dict] = mapped_column(JSON, default=dict)
    assumptions: Mapped[list] = mapped_column(JSON, default=list)


class TwinTelemetry(Base):
    __tablename__ = "twin_telemetry"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    twin_id: Mapped[int] = mapped_column(ForeignKey("digital_twins.id"), index=True)
    timestamp: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, index=True)
    metrics: Mapped[dict] = mapped_column(JSON, default=dict)


class GisFeature(Base):
    __tablename__ = "gis_features"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    layer: Mapped[str] = mapped_column(String(80), index=True)
    geometry: Mapped[dict] = mapped_column(JSON)
    properties: Mapped[dict] = mapped_column(JSON, default=dict)


class SimulationRun(Base):
    __tablename__ = "simulation_runs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    engine: Mapped[str] = mapped_column(String(80))
    parameters: Mapped[dict] = mapped_column(JSON, default=dict)
    result: Mapped[dict] = mapped_column(JSON, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class LearningProgress(Base):
    __tablename__ = "learning_progress"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    domain_slug: Mapped[str] = mapped_column(String(160), index=True)
    completed_lessons: Mapped[int] = mapped_column(Integer, default=0)
    score: Mapped[float] = mapped_column(Float, default=0.0)
