"use client";

import { FormEvent, useEffect, useState } from "react";
import { api } from "@/lib/api";

export function CollabPanel() {
  const [rooms, setRooms] = useState<{ id: string; name: string; occupants: number }[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    api.collabRooms().then(setRooms).catch(() => setRooms([]));
    return () => socket?.close();
  }, [socket]);

  function join(roomId: string) {
    socket?.close();
    const url = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1").replace("http", "ws") + `/ws/collab/${roomId}`;
    const ws = new WebSocket(url);
    ws.onmessage = (event) => setLog((prev) => [...prev.slice(-12), event.data]);
    setSocket(ws);
    setLog((prev) => [...prev, `joined ${roomId}`]);
  }

  function send(event: FormEvent) {
    event.preventDefault();
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    socket.send(JSON.stringify({ text: message }));
    setMessage("");
  }

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[32rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Collaboration</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {rooms.map((room) => (
          <button key={room.id} className="rounded-full border border-white/10 px-3 py-1 text-xs" onClick={() => join(room.id)}>
            {room.name} ({room.occupants})
          </button>
        ))}
      </div>
      <pre className="mt-3 max-h-40 overflow-auto rounded-xl bg-black/40 p-3 text-[11px] text-slate-400">{log.join("\n") || "Join a room to share presence."}</pre>
      <form onSubmit={send} className="mt-2 flex gap-2">
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 rounded-xl bg-black/30 px-3 py-2 text-sm" placeholder="Message the room" />
        <button className="rounded-xl bg-cyan-400/20 px-3 text-sm text-holos">Send</button>
      </form>
    </section>
  );
}
