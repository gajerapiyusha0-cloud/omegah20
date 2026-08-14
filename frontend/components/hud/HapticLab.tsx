"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { playHaptic } from "@/lib/haptic";
import { useExperience } from "@/lib/store";

type Pattern = { id: string; name: string; category: string; intensity: number; duration_ms: number };

export function HapticLab() {
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);
  const setLastHaptic = useExperience((s) => s.setLastHaptic);

  useEffect(() => {
    api.haptics().then(setPatterns).catch(() => setPatterns([]));
  }, []);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[34rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Haptic lattice</h2>
      <p className="mt-1 text-sm text-slate-400">50 software cues. Hardware is optional; playback falls back to silent confirmation.</p>
      <div className="mt-4 grid max-h-80 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            className="rounded-xl border border-white/10 px-3 py-2 text-left text-xs hover:border-cyan-400/40"
            onClick={async () => {
              if (hapticEnabled) playHaptic(pattern);
              setLastHaptic(pattern.id);
              await api.playHaptic(pattern.id).catch(() => undefined);
            }}
          >
            <span className="block text-slate-200">{pattern.name}</span>
            <span className="text-slate-500">{pattern.category} · {pattern.id}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
