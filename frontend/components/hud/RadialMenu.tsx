"use client";

import { useExperience, type Mode } from "@/lib/store";

const ITEMS: { mode: Mode; label: string }[] = [
  { mode: "universe", label: "Universe" },
  { mode: "gis", label: "Globe GIS" },
  { mode: "graph", label: "Graph" },
  { mode: "twin", label: "Twins" },
  { mode: "sim", label: "Simulate" },
  { mode: "learn", label: "Learn" },
];

export function RadialMenu() {
  const setMode = useExperience((s) => s.setMode);
  return (
    <nav aria-label="Spatial modes" className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
      <div className="pointer-events-auto flex gap-2 rounded-full holo-panel px-3 py-2">
        {ITEMS.map((item) => (
          <button key={item.mode} className="rounded-full px-3 py-1 text-xs uppercase tracking-widest text-slate-200 hover:text-holos" onClick={() => setMode(item.mode)}>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
