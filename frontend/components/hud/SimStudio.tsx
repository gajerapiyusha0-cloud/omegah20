"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { playHaptic } from "@/lib/haptic";
import { useExperience } from "@/lib/store";

export function SimStudio() {
  const [engines, setEngines] = useState<{ id: string; name: string; haptic: string }[]>([]);
  const [engine, setEngine] = useState("flood");
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);

  useEffect(() => {
    api.engines().then(setEngines).catch(() => setEngines([]));
  }, []);

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
      <button
        className="mt-4 rounded-xl bg-cyan-400/20 px-4 py-2 text-sm text-holos"
        onClick={async () => {
          const res = await api.simulate(engine, {});
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
