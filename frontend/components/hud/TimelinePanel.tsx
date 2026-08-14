"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export function TimelinePanel() {
  const [events, setEvents] = useState<{ year: number; title: string; domains: string[] }[]>([]);

  useEffect(() => {
    api.timeline().then(setEvents).catch(() => setEvents([]));
  }, []);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[34rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Knowledge timeline</h2>
      <ol className="mt-4 max-h-80 space-y-3 overflow-auto border-l border-cyan-400/30 pl-4">
        {events.map((event) => (
          <li key={`${event.year}-${event.title}`}>
            <p className="text-xs text-holos">{event.year}</p>
            <p className="text-sm">{event.title}</p>
            <p className="text-[11px] text-slate-500">{event.domains.join(" · ")}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
