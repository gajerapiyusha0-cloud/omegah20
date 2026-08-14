"use client";

import { useExperience, type Mode } from "@/lib/store";

const ITEMS: { mode: Mode; label: string }[] = [
  { mode: "universe", label: "Universe" },
  { mode: "gis", label: "GIS" },
  { mode: "graph", label: "Graph" },
  { mode: "twin", label: "Twins" },
  { mode: "sim", label: "Simulate" },
  { mode: "satellite", label: "Satellite" },
  { mode: "haptics", label: "Haptics" },
  { mode: "timeline", label: "Timeline" },
  { mode: "analytics", label: "Analytics" },
  { mode: "plugins", label: "Plugins" },
  { mode: "collab", label: "Collab" },
  { mode: "admin", label: "Admin" },
  { mode: "journal", label: "Journal" },
  { mode: "assets", label: "Assets" },
  { mode: "settings", label: "Settings" },
  { mode: "learn", label: "Learn" },
];

export function RadialMenu() {
  const mode = useExperience((s) => s.mode);
  const setMode = useExperience((s) => s.setMode);
  const domains = useExperience((s) => s.domains);
  const selectDomain = useExperience((s) => s.selectDomain);

  return (
    <nav aria-label="Spatial modes" className="pointer-events-none absolute bottom-6 left-1/2 z-20 w-[min(96vw,72rem)] -translate-x-1/2">
      <div className="pointer-events-auto flex flex-wrap justify-center gap-1 rounded-3xl holo-panel px-2 py-2">
        {ITEMS.map((item) => (
          <button
            key={item.mode}
            className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-widest ${mode === item.mode ? "text-holos" : "text-slate-300 hover:text-holos"}`}
            onClick={() => {
              if (item.mode === "learn" && domains[0]) selectDomain(domains[0]);
              else setMode(item.mode);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
