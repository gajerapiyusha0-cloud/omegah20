"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type SceneResult = {
  ndvi_mean: number;
  ndwi_mean: number;
  classification: string;
  grid: number[][];
};

const SCENES = ["canopy-reserve", "amber-fields", "delta-wetlands", "aurora-harbor-city"];

export function SatellitePanel() {
  const [scene, setScene] = useState(SCENES[0]);
  const [data, setData] = useState<SceneResult | null>(null);
  const [error, setError] = useState("");
  const [stac, setStac] = useState<{ live?: boolean; source?: string; features: { id: string; properties: Record<string, unknown> }[] } | null>(null);

  useEffect(() => {
    setError("");
    api
      .satellite(scene)
      .then(setData)
      .catch(() => setError("Satellite proxy unavailable. Start the API on port 8000."));
    api.stacSearch().then(setStac).catch(() => setStac(null));
  }, [scene]);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[34rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300">
        {stac?.live ? "Live Sentinel-2 STAC" : "Copernicus proxy"}
      </p>
      <h2 className="font-display mt-1 text-2xl">Satellite intelligence</h2>
      <p className="mt-2 text-sm text-slate-400">
        {stac?.live
          ? `Earth Search ${stac.source || ""} · ${stac.features.length} scenes`
          : "Synthetic Sentinel-2 NDVI / NDWI with live STAC fallback."}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {SCENES.map((item) => (
          <button
            key={item}
            onClick={() => setScene(item)}
            className={`rounded-full px-3 py-1 text-xs ${scene === item ? "bg-emerald-400/20 text-emerald-200" : "border border-white/10"}`}
          >
            {item}
          </button>
        ))}
      </div>
      {stac?.features?.length ? (
        <ul className="mt-3 max-h-24 space-y-1 overflow-auto text-[11px] text-slate-400">
          {stac.features.slice(0, 4).map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      ) : null}
      {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}
      {data && (
        <>
          <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-xl border border-white/10 px-3 py-2">
              <dt className="text-slate-500">NDVI</dt>
              <dd>{data.ndvi_mean.toFixed(3)}</dd>
            </div>
            <div className="rounded-xl border border-white/10 px-3 py-2">
              <dt className="text-slate-500">NDWI</dt>
              <dd>{data.ndwi_mean.toFixed(3)}</dd>
            </div>
            <div className="rounded-xl border border-white/10 px-3 py-2">
              <dt className="text-slate-500">Cover</dt>
              <dd>{data.classification}</dd>
            </div>
          </dl>
          <div
            className="mt-4 grid aspect-square w-full overflow-hidden rounded-2xl"
            style={{ gridTemplateColumns: `repeat(${data.grid[0]?.length || 1}, minmax(0, 1fr))` }}
            aria-label="NDVI grid"
          >
            {data.grid.flat().map((value, index) => {
              const t = Math.max(0, Math.min(1, (value + 0.2) / 1.0));
              return <div key={index} style={{ background: `rgb(${20 + (1 - t) * 80}, ${40 + t * 180}, ${40})` }} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
