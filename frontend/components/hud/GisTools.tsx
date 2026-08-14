"use client";

import { FormEvent, useEffect, useState } from "react";
import { api } from "@/lib/api";

export function GisTools() {
  const [fromLon, setFromLon] = useState("-122.42");
  const [fromLat, setFromLat] = useState("37.77");
  const [toLon, setToLon] = useState("-1.26");
  const [toLat, setToLat] = useState("51.75");
  const [result, setResult] = useState("");
  const [heat, setHeat] = useState<{ name: string; weight: number }[]>([]);
  const [stac, setStac] = useState("");
  const [job, setJob] = useState("");

  useEffect(() => {
    api.heatmap().then((res) => setHeat(res.points.map((p) => ({ name: p.name, weight: p.weight })))).catch(() => setHeat([]));
  }, []);

  async function measure(event: FormEvent) {
    event.preventDefault();
    const payload = await api.measure({
      from_lon: Number(fromLon),
      from_lat: Number(fromLat),
      to_lon: Number(toLon),
      to_lat: Number(toLat),
    });
    setResult(`${payload.kilometers.toFixed(1)} km`);
  }

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[26rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5">
      <h2 className="font-display text-xl">GIS tools</h2>
      <form onSubmit={measure} className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <input value={fromLon} onChange={(e) => setFromLon(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="from longitude" />
        <input value={fromLat} onChange={(e) => setFromLat(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="from latitude" />
        <input value={toLon} onChange={(e) => setToLon(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="to longitude" />
        <input value={toLat} onChange={(e) => setToLat(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="to latitude" />
        <button className="col-span-2 rounded-xl bg-cyan-400/20 py-2 text-holos">Measure great-circle</button>
      </form>
      {result && <p className="mt-2 text-sm text-holos">{result}</p>}
      <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">Heat map</p>
      <ul className="mt-2 space-y-1">
        {heat.map((point) => (
          <li key={point.name} className="flex items-center gap-2 text-[11px]">
            <span className="w-28 truncate">{point.name}</span>
            <span className="h-1 flex-1 overflow-hidden rounded bg-white/10">
              <span className="block h-full bg-amber-300" style={{ width: `${Math.round(point.weight * 100)}%` }} />
            </span>
          </li>
        ))}
      </ul>
      <button
        className="mt-3 rounded-full border border-white/10 px-3 py-1 text-[11px]"
        onClick={async () => {
          const res = await api.stacSearch().catch(() => ({ features: [] }));
          setStac(res.features[0]?.id || "no scene");
        }}
      >
        STAC search {stac && `· ${stac}`}
      </button>
      <button
        className="mt-2 rounded-full border border-white/10 px-3 py-1 text-[11px]"
        onClick={async () => {
          const queued = await api.ndviJob("canopy-reserve").catch(() => ({ queued: false, task_id: null, broker: "offline" }));
          setJob(`${queued.broker}${queued.task_id ? ` · ${queued.task_id.slice(0, 8)}` : ""}`);
          if (queued.task_id) {
            const status = await api.jobStatus(queued.task_id).catch(() => null);
            if (status?.result?.ndvi_mean != null) setJob(`${queued.broker} · NDVI ${status.result.ndvi_mean.toFixed(3)}`);
          }
        }}
      >
        Queue NDVI job {job && `· ${job}`}
      </button>
    </section>
  );
}
