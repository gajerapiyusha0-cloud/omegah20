"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export function AdminPanel() {
  const [data, setData] = useState<{ users: number; domains: number; twins: number; plugins: number; flags: Record<string, boolean> } | null>(null);

  useEffect(() => {
    api.admin().then(setData).catch(() => setData(null));
  }, []);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[32rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Administration</h2>
      {!data ? (
        <p className="mt-2 text-sm text-slate-400">Console unavailable.</p>
      ) : (
        <>
          <dl className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
            <div className="rounded-xl border border-white/10 p-2"><dt>Users</dt><dd className="text-holos">{data.users}</dd></div>
            <div className="rounded-xl border border-white/10 p-2"><dt>Domains</dt><dd className="text-holos">{data.domains}</dd></div>
            <div className="rounded-xl border border-white/10 p-2"><dt>Twins</dt><dd className="text-holos">{data.twins}</dd></div>
            <div className="rounded-xl border border-white/10 p-2"><dt>Plugins</dt><dd className="text-holos">{data.plugins}</dd></div>
          </dl>
          <ul className="mt-4 text-xs text-slate-300">
            {Object.entries(data.flags).map(([key, value]) => (
              <li key={key} className="flex justify-between border-b border-white/5 py-1">
                <span>{key}</span>
                <span className={value ? "text-emerald-300" : "text-slate-500"}>{String(value)}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-3 rounded-full border border-white/10 px-3 py-1 text-[11px]"
            onClick={async () => {
              const res = await api.graphSync().catch(() => ({ backend: "offline", synced: 0 }));
              setData((prev) => prev && { ...prev, flags: { ...prev.flags, neo4j: res.backend === "neo4j" } });
            }}
          >
            Sync knowledge graph
          </button>
        </>
      )}
    </section>
  );
}
