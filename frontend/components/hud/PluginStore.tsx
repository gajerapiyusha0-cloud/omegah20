"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type Plugin = { id: string; name: string; category: string; status: string; summary: string };

export function PluginStore() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    api.plugins().then(setPlugins).catch(() => setPlugins([]));
  }, []);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[34rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Plugin marketplace</h2>
      <p className="mt-1 text-sm text-slate-400">Modular extensions. Enablement is session-local in this phase.</p>
      {note && <p className="mt-2 text-xs text-holos">{note}</p>}
      <ul className="mt-4 max-h-80 space-y-2 overflow-auto">
        {plugins.map((plugin) => (
          <li key={plugin.id} className="rounded-xl border border-white/10 px-3 py-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm">{plugin.name}</p>
              <button
                className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[10px] uppercase text-holos"
                onClick={async () => {
                  await api.enablePlugin(plugin.id).catch(() => undefined);
                  setNote(`Enabled ${plugin.name}`);
                }}
              >
                {plugin.status}
              </button>
            </div>
            <p className="text-[11px] text-slate-500">{plugin.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
