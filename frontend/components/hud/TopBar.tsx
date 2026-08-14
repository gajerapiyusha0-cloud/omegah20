"use client";

import { useExperience } from "@/lib/store";

export function TopBar() {
  const query = useExperience((s) => s.query);
  const setQuery = useExperience((s) => s.setQuery);
  const mode = useExperience((s) => s.mode);
  const setMode = useExperience((s) => s.setMode);
  const theme = useExperience((s) => s.theme);
  const setTheme = useExperience((s) => s.setTheme);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);
  const setHapticEnabled = useExperience((s) => s.setHapticEnabled);
  const domains = useExperience((s) => s.domains);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-4">
      <div className="pointer-events-auto holo-panel rounded-2xl px-4 py-3">
        <p className="font-display text-sm tracking-[0.3em] text-holos">VIRTUAL GEOTWINVERSE</p>
        <p className="text-xs text-slate-400">{domains.length} domains · spatial knowledge universe</p>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <label className="sr-only" htmlFor="spatial-search">
          Spatial search
        </label>
        <input
          id="spatial-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the constellation — /"
          className="holo-panel w-80 rounded-full px-4 py-2 text-sm outline-none placeholder:text-slate-500"
        />
        {(["universe", "gis", "graph", "twin", "sim"] as const).map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={`holo-panel rounded-full px-3 py-2 text-xs uppercase tracking-wider ${mode === item ? "text-holos" : "text-slate-400"}`}
          >
            {item}
          </button>
        ))}
        <button className="holo-panel rounded-full px-3 py-2 text-xs" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <button className="holo-panel rounded-full px-3 py-2 text-xs" onClick={() => setHapticEnabled(!hapticEnabled)} aria-pressed={hapticEnabled}>
          Haptics {hapticEnabled ? "on" : "off"}
        </button>
      </div>
    </header>
  );
}
