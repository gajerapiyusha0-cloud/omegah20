from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter(tags=["collaboration"])

ROOMS: dict[str, list[WebSocket]] = {}
CHAT: dict[str, list[dict]] = {}


@router.get("/collab/rooms")
def rooms() -> list[dict]:
    return [
        {"id": "aurora-harbor", "name": "Aurora Harbor planning", "occupants": len(ROOMS.get("aurora-harbor", []))},
        {"id": "helix-lab", "name": "Helix campus walkthrough", "occupants": len(ROOMS.get("helix-lab", []))},
        {"id": "research-floor", "name": "Open research floor", "occupants": len(ROOMS.get("research-floor", []))},
    ]


@router.get("/collab/rooms/{room_id}/history")
def history(room_id: str) -> list[dict]:
    return CHAT.get(room_id, [])[-50:]


@router.websocket("/ws/collab/{room_id}")
async def collab_socket(websocket: WebSocket, room_id: str) -> None:
    await websocket.accept()
    ROOMS.setdefault(room_id, []).append(websocket)
    CHAT.setdefault(room_id, []).append({"type": "join", "room": room_id})
    await websocket.send_json({"type": "joined", "room": room_id, "occupants": len(ROOMS[room_id])})
    try:
        while True:
            message = await websocket.receive_json()
            kind = message.get("type", "chat")
            envelope = {"type": kind if kind in {"offer", "answer", "ice", "chat"} else "message", "room": room_id, "payload": message}
            CHAT[room_id].append(envelope)
            living = []
            for peer in ROOMS[room_id]:
                if kind in {"offer", "answer", "ice"} and peer is websocket:
                    living.append(peer)
                    continue
                try:
                    await peer.send_json(envelope)
                    living.append(peer)
                except Exception:
                    continue
            ROOMS[room_id] = living
    except WebSocketDisconnect:
        if websocket in ROOMS.get(room_id, []):
            ROOMS[room_id].remove(websocket)
