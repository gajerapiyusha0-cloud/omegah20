"use client";

import { useEffect, useState } from "react";
import { api, type Domain } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function GraphPanel() {
  const query = useExperience((s) => s.query);
  const [results, setResults] = useState<Domain[]>([]);

  useEffect(() => {
    const q = query || "geospatial intelligence";
    api.search(q).then((res) => setResults(res.results)).catch(() => setResults([]));
  }, [query]);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[30rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5">
      <h2 className="font-display text-2xl">Knowledge graph</h2>
      <p className="mt-1 text-sm text-slate-400">Semantic neighborhood for “{query || "geospatial intelligence"}”.</p>
      <ul className="mt-4 space-y-2">
        {results.map((item) => (
          <li key={item.slug} className="rounded-xl border border-white/10 px-3 py-2">
            <p className="text-sm">{item.name}</p>
            <p className="text-[11px] text-slate-500">{item.category}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
