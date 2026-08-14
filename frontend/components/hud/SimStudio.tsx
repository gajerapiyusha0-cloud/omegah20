"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { playHaptic } from "@/lib/haptic";
import { useExperience } from "@/lib/store";

const PARAMS: Record<string, { key: string; label: string; value: number }[]> = {
  flood: [
    { key: "rain_mm", label: "Rain mm", value: 80 },
    { key: "surge_m", label: "Surge m", value: 0.6 },
  ],
  climate: [{ key: "years", label: "Years", value: 30 }, { key: "forcing", label: "Forcing", value: 1 }],
  traffic: [{ key: "demand", label: "Demand", value: 1 }, { key: "capacity", label: "Capacity", value: 1 }],
  epidemic: [{ key: "r0", label: "R0", value: 1.8 }, { key: "days", label: "Days", value: 60 }],
  ndvi: [{ key: "months", label: "Months", value: 12 }, { key: "drought", label: "Drought", value: 0.2 }],
  orbit: [{ key: "altitude_km", label: "Altitude km", value: 400 }],
};

export function SimStudio() {
  const [engines, setEngines] = useState<{ id: string; name: string; haptic: string }[]>([]);
  const [engine, setEngine] = useState("flood");
  const [fields, setFields] = useState(PARAMS.flood);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);

  useEffect(() => {
    api.engines().then(setEngines).catch(() => setEngines([]));
  }, []);

  useEffect(() => {
    setFields(PARAMS[engine] || []);
  }, [engine]);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[32rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5">
      <h2 className="font-display text-2xl">Simulation Studio</h2>
      <p className="mt-1 text-sm text-slate-400">Transparent assumptions. Software-only scenarios.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {engines.map((item) => (
          <button
            key={item.id}
            onClick={() => setEngine(item.id)}
            className={`rounded-full px-3 py-1 text-xs ${engine === item.id ? "bg-cyan-400/20 text-holos" : "border border-white/10"}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {fields.map((field, index) => (
          <label key={field.key} className="text-[11px] text-slate-400">
            {field.label}
            <input
              type="number"
              value={field.value}
              className="mt-1 w-full rounded-lg bg-black/30 px-2 py-1 text-sm text-slate-100"
              onChange={(e) => {
                const next = [...fields];
                next[index] = { ...field, value: Number(e.target.value) };
                setFields(next);
              }}
            />
          </label>
        ))}
      </div>
      <button
        className="mt-4 rounded-xl bg-cyan-400/20 px-4 py-2 text-sm text-holos"
        onClick={async () => {
          const parameters = Object.fromEntries(fields.map((f) => [f.key, f.value]));
          const res = await api.simulate(engine, parameters);
          setResult(res.result);
          if (hapticEnabled) playHaptic({ intensity: 0.5, duration_ms: 180 });
        }}
      >
        Run
      </button>
      {result && (
        <pre className="mt-4 max-h-64 overflow-auto rounded-xl bg-black/40 p-3 text-xs text-slate-300">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </section>
  );
}
