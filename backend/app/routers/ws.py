from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter(tags=["realtime"])


@router.websocket("/ws/universe")
async def universe_socket(websocket: WebSocket) -> None:
    await websocket.accept()
    await websocket.send_json({"type": "welcome", "channel": "universe"})
    try:
        while True:
            message = await websocket.receive_json()
            kind = message.get("type", "ping")
            if kind == "ping":
                await websocket.send_json({"type": "pong"})
            else:
                await websocket.send_json({"type": "echo", "payload": message})
    except WebSocketDisconnect:
        return
