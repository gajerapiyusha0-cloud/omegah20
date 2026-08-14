"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export function AssetLibrary() {
  const [assets, setAssets] = useState<{ id: string; kind: string; name: string; format: string }[]>([]);

  useEffect(() => {
    api.assets().then(setAssets).catch(() => setAssets([]));
  }, []);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[32rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Asset library</h2>
      <ul className="mt-4 space-y-2">
        {assets.map((asset) => (
          <li key={asset.id} className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm">
            <span>{asset.name}</span>
            <span className="text-[11px] uppercase text-slate-500">{asset.kind} · {asset.format}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
