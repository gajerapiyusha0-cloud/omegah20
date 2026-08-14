"use client";

import { useEffect, useState } from "react";
import { api, type Twin } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function TwinPanel() {
  const twins = useExperience((s) => s.twins);
  const selected = useExperience((s) => s.selectedTwin);
  const selectTwin = useExperience((s) => s.selectTwin);
  const [live, setLive] = useState<Twin | undefined>(selected);
  const [series, setSeries] = useState<number[]>([]);

  useEffect(() => {
    setLive(selected ?? twins[0]);
    const slug = selected?.slug ?? twins[0]?.slug;
    if (!slug) return;
    api
      .twinSeries(slug)
      .then((res) => {
        const key = Object.keys(res.samples[0]?.metrics || {}).find((k) => typeof res.samples[0].metrics[k] === "number");
        setSeries(res.samples.map((s) => Number(key ? s.metrics[key] : 0)));
      })
      .catch(() => setSeries([]));
  }, [selected, twins]);

  if (!live) {
    return (
      <section className="pointer-events-auto absolute left-6 top-28 z-20 w-96 holo-panel rounded-3xl p-5">
        <h2 className="font-display text-xl">Digital twins</h2>
        <p className="mt-2 text-sm text-slate-400">No twins loaded.</p>
      </section>
    );
  }

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[30rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5">
      <p className="text-[10px] uppercase tracking-[0.35em] text-amber-300">{live.twin_type}</p>
      <h2 className="font-display mt-1 text-2xl">{live.name}</h2>
      <p className="mt-2 text-sm text-slate-300">{live.description}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
        {Object.entries(live.state || {}).map(([key, value]) => (
          <div key={key} className="rounded-xl border border-white/10 px-3 py-2">
            <dt className="text-slate-500">{key}</dt>
            <dd className="text-slate-100">{String(value)}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[11px] text-slate-500">Assumptions: {live.assumptions.join(" · ")}</p>
      {series.length > 0 && (
        <div className="mt-3 flex h-12 items-end gap-1">
          {series.map((value, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-amber-300/70"
              style={{ height: `${Math.min(100, Math.abs(value) * 8 + 10)}%` }}
            />
          ))}
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {twins.map((twin) => (
          <button key={twin.slug} onClick={() => selectTwin(twin)} className="rounded-full border border-white/10 px-3 py-1 text-xs">
            {twin.name.split(" ")[0]}
          </button>
        ))}
        <button
          className="rounded-full bg-amber-400/20 px-3 py-1 text-xs text-amber-200"
          onClick={async () => {
            const next = await api.twinTick(live.slug);
            setLive(next);
            selectTwin(next);
          }}
        >
          Advance state
        </button>
      </div>
    </section>
  );
}
