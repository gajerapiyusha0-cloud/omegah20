"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export function AnalyticsPanel() {
  const [data, setData] = useState<{
    domains: number;
    twins: number;
    features: number;
    simulations: number;
    explorers: number;
    categories: { name: string; count: number }[];
  } | null>(null);

  useEffect(() => {
    api.analytics().then(setData).catch(() => setData(null));
  }, []);

  if (!data) {
    return (
      <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[32rem] holo-panel rounded-3xl p-5 lg:left-[20rem]">
        <h2 className="font-display text-2xl">Analytics</h2>
        <p className="mt-2 text-sm text-slate-400">Waiting for live metrics…</p>
      </section>
    );
  }

  const max = Math.max(...data.categories.map((c) => c.count), 1);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[34rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Analytics</h2>
      <dl className="mt-3 grid grid-cols-5 gap-2 text-center text-xs">
        {[
          ["Domains", data.domains],
          ["Twins", data.twins],
          ["GIS", data.features],
          ["Sims", data.simulations],
          ["Users", data.explorers],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-xl border border-white/10 px-2 py-3">
            <dt className="text-slate-500">{label}</dt>
            <dd className="text-lg text-holos">{value}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-4 space-y-2">
        {data.categories.map((row) => (
          <li key={row.name}>
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>{row.name}</span>
              <span>{row.count}</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-cyan-400/70" style={{ width: `${(row.count / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
