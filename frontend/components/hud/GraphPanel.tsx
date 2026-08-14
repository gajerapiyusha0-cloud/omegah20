"use client";

import { useEffect, useMemo, useState } from "react";
import { api, type Domain } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function GraphPanel() {
  const query = useExperience((s) => s.query);
  const domains = useExperience((s) => s.domains);
  const selectDomain = useExperience((s) => s.selectDomain);
  const [results, setResults] = useState<Domain[]>([]);
  const [graph, setGraph] = useState<{ nodes: { id: number; title: string }[]; edges: { source_id: number; target_id: number }[] } | null>(null);
  const [syncNote, setSyncNote] = useState("");

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

  useEffect(() => {
    const slug = items[0]?.slug || domains[0]?.slug;
    if (!slug) return;
    api.domainGraph(slug).then(setGraph).catch(() => setGraph(null));
  }, [items, domains]);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[30rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Knowledge graph</h2>
      <p className="mt-1 text-sm text-slate-400">Semantic neighborhood for “{query || "geospatial intelligence"}”.</p>
      <button
        className="mt-3 rounded-full border border-white/10 px-3 py-1 text-[11px]"
        onClick={async () => {
          const res = await api.graphSync().catch(() => ({ backend: "offline", synced: 0 }));
          setSyncNote(`${res.backend} · ${res.synced} statements`);
        }}
      >
        Sync to Neo4j {syncNote && `· ${syncNote}`}
      </button>
      {graph && (
        <svg viewBox="0 0 320 120" className="mt-3 h-28 w-full" aria-hidden>
          {graph.edges.slice(0, 12).map((edge, i) => (
            <line key={`${edge.source_id}-${edge.target_id}-${i}`} x1={20 + (i % 8) * 36} y1="24" x2={40 + (i % 7) * 40} y2="88" stroke="#67e8f9" strokeOpacity="0.35" />
          ))}
          {graph.nodes.slice(0, 8).map((node, i) => (
            <g key={node.id}>
              <circle cx={28 + i * 36} cy={i % 2 === 0 ? 32 : 80} r="7" fill="#67e8f9" />
              <title>{node.title}</title>
            </g>
          ))}
        </svg>
      )}
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
