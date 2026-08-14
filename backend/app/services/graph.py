from __future__ import annotations

from sqlalchemy.orm import Session

from app.models import GraphEdge, GraphNode, KnowledgeDomain


def search_domains(db: Session, query: str, limit: int = 12) -> list[KnowledgeDomain]:
    q = query.strip().lower()
    domains = db.query(KnowledgeDomain).all()
    scored: list[tuple[float, KnowledgeDomain]] = []
    tokens = [t for t in q.replace(",", " ").split() if t]
    for domain in domains:
        blob = f"{domain.name} {domain.category} {domain.summary} {' '.join(domain.tags)}".lower()
        score = 0.0
        if q and q in blob:
            score += 5
        for token in tokens:
            if token in blob:
                score += 1.5
            if token in domain.name.lower():
                score += 2
        if score > 0:
            scored.append((score, domain))
    scored.sort(key=lambda item: item[0], reverse=True)
    return [d for _, d in scored[:limit]]


def related_domains(db: Session, slug: str, limit: int = 8) -> list[KnowledgeDomain]:
    domain = db.query(KnowledgeDomain).filter(KnowledgeDomain.slug == slug).first()
    if not domain:
        return []
    same = (
        db.query(KnowledgeDomain)
        .filter(KnowledgeDomain.category == domain.category, KnowledgeDomain.id != domain.id)
        .limit(limit)
        .all()
    )
    return same


def neighborhood(db: Session, node_id: int, depth: int = 1) -> dict:
    node = db.get(GraphNode, node_id)
    if not node:
        return {"nodes": [], "edges": []}
    seen_nodes = {node.id: node}
    seen_edges: list[GraphEdge] = []
    frontier = [node.id]
    for _ in range(max(1, depth)):
        nxt: list[int] = []
        edges = (
            db.query(GraphEdge)
            .filter((GraphEdge.source_id.in_(frontier)) | (GraphEdge.target_id.in_(frontier)))
            .all()
        )
        for edge in edges:
            seen_edges.append(edge)
            for nid in (edge.source_id, edge.target_id):
                if nid not in seen_nodes:
                    related = db.get(GraphNode, nid)
                    if related:
                        seen_nodes[nid] = related
                        nxt.append(nid)
        frontier = nxt
    return {
        "nodes": list(seen_nodes.values()),
        "edges": seen_edges,
    }
