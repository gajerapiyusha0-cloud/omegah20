from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import GraphEdge, GraphNode
from app.schemas import GraphEdgePublic, GraphNodePublic
from app.services.graph import neighborhood, search_domains

router = APIRouter(prefix="/graph", tags=["graph"])


@router.get("/search")
def semantic_search(q: str, db: Session = Depends(get_db), limit: int = Query(12, le=50)) -> dict:
    domains = search_domains(db, q, limit=limit)
    return {
        "query": q,
        "results": [
            {
                "slug": d.slug,
                "name": d.name,
                "category": d.category,
                "color": d.color,
                "summary": d.summary,
            }
            for d in domains
        ],
    }


@router.get("/nodes", response_model=list[GraphNodePublic])
def nodes(db: Session = Depends(get_db), domain_id: int | None = None, limit: int = 80) -> list[GraphNode]:
    query = db.query(GraphNode)
    if domain_id:
        query = query.filter(GraphNode.domain_id == domain_id)
    return query.limit(limit).all()


@router.get("/edges", response_model=list[GraphEdgePublic])
def edges(db: Session = Depends(get_db), limit: int = 200) -> list[GraphEdge]:
    return db.query(GraphEdge).limit(limit).all()


@router.get("/neighborhood/{node_id}")
def graph_neighborhood(node_id: int, depth: int = 1, db: Session = Depends(get_db)) -> dict:
    payload = neighborhood(db, node_id, depth)
    if not payload["nodes"]:
        raise HTTPException(status_code=404, detail="Node not found")
    return {
        "nodes": [GraphNodePublic.model_validate(n).model_dump() for n in payload["nodes"]],
        "edges": [GraphEdgePublic.model_validate(e).model_dump() for e in payload["edges"]],
    }


@router.get("/domain/{slug}")
def domain_graph(slug: str, db: Session = Depends(get_db)) -> dict:
    from app.models import KnowledgeDomain

    domain = db.query(KnowledgeDomain).filter(KnowledgeDomain.slug == slug).first()
    if not domain:
        raise HTTPException(status_code=404, detail="Domain not found")
    nodes = db.query(GraphNode).filter(GraphNode.domain_id == domain.id).all()
    ids = [n.id for n in nodes]
    edges = db.query(GraphEdge).filter((GraphEdge.source_id.in_(ids)) | (GraphEdge.target_id.in_(ids))).all()
    extra_ids = {e.source_id for e in edges} | {e.target_id for e in edges}
    extra_nodes = db.query(GraphNode).filter(GraphNode.id.in_(extra_ids)).all() if extra_ids else nodes
    return {
        "domain": domain.slug,
        "nodes": [GraphNodePublic.model_validate(n).model_dump() for n in extra_nodes],
        "edges": [GraphEdgePublic.model_validate(e).model_dump() for e in edges],
    }


@router.get("/constellation")
def constellation(db: Session = Depends(get_db), category: str | None = None) -> dict:
    from app.models import KnowledgeDomain

    query = db.query(KnowledgeDomain)
    if category:
        query = query.filter(KnowledgeDomain.category == category)
    domains = query.all()
    return {
        "count": len(domains),
        "stars": [
            {
                "slug": d.slug,
                "name": d.name,
                "category": d.category,
                "color": d.color,
                "orbit": d.orbit,
                "inclination": d.inclination,
            }
            for d in domains
        ],
    }


@router.get("/export/cypher")
def export_cypher(db: Session = Depends(get_db), limit: int = 40) -> dict:
    nodes = db.query(GraphNode).limit(limit).all()
    ids = [n.id for n in nodes]
    edges = db.query(GraphEdge).filter(GraphEdge.source_id.in_(ids)).limit(limit * 2).all() if ids else []
    statements = [
        f"CREATE (n{n.id}:Concept {{title:{_cypher_str(n.title)}, slug:{_cypher_str(n.slug)}}})"
        for n in nodes
    ]
    for edge in edges:
        rel = "".join(ch if ch.isalnum() else "_" for ch in (edge.relation or "RELATED").upper()) or "RELATED"
        statements.append(f"CREATE (n{edge.source_id})-[:{rel}]->(n{edge.target_id})")
    return {"dialect": "cypher", "statements": statements, "note": "Offline Neo4j dual-write payload."}


def _cypher_str(value: str) -> str:
    return "'" + str(value).replace("\\", "\\\\").replace("'", "\\'") + "'"


@router.post("/sync")
def sync_graph(db: Session = Depends(get_db), limit: int = 40) -> dict:
    from app.services.neo4j_bridge import sync_statements

    payload = export_cypher(db, limit=limit)
    result = sync_statements(payload["statements"])
    result["dialect"] = "cypher"
    return result
