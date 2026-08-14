"use client";

import { useEffect, useMemo, useState } from "react";
import { api, type Domain } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function GraphPanel() {
  const query = useExperience((s) => s.query);
  const domains = useExperience((s) => s.domains);
  const selectDomain = useExperience((s) => s.selectDomain);
  const [results, setResults] = useState<Domain[]>([]);

  const local = useMemo(() => {
    const q = (query || "geospatial intelligence").toLowerCase();
    return domains
      .filter((d) => `${d.name} ${d.category} ${d.summary}`.toLowerCase().includes(q.split(" ")[0] || q))
      .slice(0, 12);
  }, [domains, query]);

  useEffect(() => {
    const q = query || "geospatial intelligence";
    api
      .search(q)
      .then((res) => setResults(res.results))
      .catch(() => setResults(local));
  }, [query, local]);

  const items = results.length ? results : local;

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[30rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Knowledge graph</h2>
      <p className="mt-1 text-sm text-slate-400">Semantic neighborhood for “{query || "geospatial intelligence"}”.</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.slug}>
            <button
              className="w-full rounded-xl border border-white/10 px-3 py-2 text-left hover:border-cyan-400/40"
              onClick={() => selectDomain(item)}
            >
              <p className="text-sm">{item.name}</p>
              <p className="text-[11px] text-slate-500">{item.category}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
