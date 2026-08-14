"use client";

import { FormEvent, useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function JournalPanel() {
  const domain = useExperience((s) => s.selectedDomain);
  const [notes, setNotes] = useState<{ id: number; title: string; body: string }[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function refresh() {
    api.journal().then(setNotes).catch(() => setNotes([]));
  }

  useEffect(() => {
    refresh();
  }, []);

  async function save(event: FormEvent) {
    event.preventDefault();
    await api.addNote(title || "Untitled", body, domain?.slug).catch(() => undefined);
    setTitle("");
    setBody("");
    refresh();
  }

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[32rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Holographic journal</h2>
      <form onSubmit={save} className="mt-3 space-y-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full rounded-xl bg-black/30 px-3 py-2 text-sm" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Field notes" className="h-24 w-full rounded-xl bg-black/30 px-3 py-2 text-sm" />
        <button className="rounded-xl bg-cyan-400/20 px-3 py-2 text-sm text-holos">Save note</button>
      </form>
      <ul className="mt-4 max-h-48 space-y-2 overflow-auto text-sm">
        {notes.map((note) => (
          <li key={note.id} className="rounded-xl border border-white/10 px-3 py-2">
            <p>{note.title}</p>
            <p className="text-[11px] text-slate-500">{note.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
