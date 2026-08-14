from sqlalchemy.orm import Session

from app.data.domains import DOMAIN_CATALOG
from app.data.gis_samples import GIS_FEATURES
from app.data.twins import TWIN_CATALOG
from app.models import DigitalTwin, GisFeature, GraphEdge, GraphNode, KnowledgeDomain, User
from app.security import hash_password


def seed_if_empty(db: Session) -> None:
    if db.query(KnowledgeDomain).count() == 0:
        domains = [KnowledgeDomain(**item) for item in DOMAIN_CATALOG]
        db.add_all(domains)
        db.commit()
        _seed_graph(db)

    if db.query(DigitalTwin).count() == 0:
        db.add_all([DigitalTwin(**item) for item in TWIN_CATALOG])
        db.commit()

    if db.query(GisFeature).count() == 0:
        db.add_all([GisFeature(**item) for item in GIS_FEATURES])
        db.commit()

    if db.query(User).filter(User.email == "explorer@geotwinverse.local").first() is None:
        db.add(
            User(
                email="explorer@geotwinverse.local",
                hashed_password=hash_password("explorer123"),
                display_name="Explorer",
            )
        )
        db.commit()


def _seed_graph(db: Session) -> None:
    domains = db.query(KnowledgeDomain).order_by(KnowledgeDomain.id).all()
    nodes: list[GraphNode] = []
    for domain in domains:
        nodes.append(
            GraphNode(
                domain_id=domain.id,
                slug=f"{domain.slug}-core",
                title=f"{domain.name} core",
                kind="concept",
                summary=domain.summary,
                properties={"hub": True},
            )
        )
        nodes.append(
            GraphNode(
                domain_id=domain.id,
                slug=f"{domain.slug}-lab",
                title=f"{domain.name} laboratory",
                kind="simulation",
                summary=f"Hands-on simulations for {domain.name}.",
                properties={"hub": False},
            )
        )
    db.add_all(nodes)
    db.commit()

    by_domain: dict[int, list[GraphNode]] = {}
    for node in db.query(GraphNode).all():
        by_domain.setdefault(node.domain_id, []).append(node)

    edges: list[GraphEdge] = []
    domain_list = list(domains)
    for i, domain in enumerate(domain_list):
        core, lab = by_domain[domain.id][0], by_domain[domain.id][1]
        edges.append(GraphEdge(source_id=core.id, target_id=lab.id, relation="has_lab", weight=1.0))
        neighbor = domain_list[(i + 1) % len(domain_list)]
        n_core = by_domain[neighbor.id][0]
        edges.append(GraphEdge(source_id=core.id, target_id=n_core.id, relation="related_to", weight=0.4))
        if domain.category == neighbor.category:
            edges[-1].weight = 0.85
        # Cross-link GIS-ish domains to the city twin conceptually via extra related_to every 17th
        if i % 17 == 0:
            far = domain_list[(i + 40) % len(domain_list)]
            edges.append(
                GraphEdge(
                    source_id=core.id,
                    target_id=by_domain[far.id][0].id,
                    relation="cross_disciplinary",
                    weight=0.55,
                )
            )
    db.add_all(edges)
    db.commit()
