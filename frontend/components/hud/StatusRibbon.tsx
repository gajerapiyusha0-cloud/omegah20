"use client";

import { useExperience } from "@/lib/store";

export function StatusRibbon() {
  const lastHaptic = useExperience((s) => s.lastHaptic);
  const mode = useExperience((s) => s.mode);
  return (
    <div className="pointer-events-none absolute bottom-8 left-6 z-20 holo-panel rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
      Mode {mode} · haptics {lastHaptic || "idle"} · keyboard U/G · search /
    </div>
  );
}
