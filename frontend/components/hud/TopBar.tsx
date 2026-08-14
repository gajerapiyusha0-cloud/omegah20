"use client";

import { useExperience } from "@/lib/store";

export function TopBar() {
  const query = useExperience((s) => s.query);
  const setQuery = useExperience((s) => s.setQuery);
  const theme = useExperience((s) => s.theme);
  const setTheme = useExperience((s) => s.setTheme);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);
  const setHapticEnabled = useExperience((s) => s.setHapticEnabled);
  const domains = useExperience((s) => s.domains);
  const apiOnline = useExperience((s) => s.apiOnline);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-wrap items-start justify-between gap-3 p-4">
      <div className="pointer-events-auto holo-panel rounded-2xl px-4 py-3">
        <p className="font-display text-sm tracking-[0.3em] text-holos">VIRTUAL GEOTWINVERSE</p>
        <p className="text-xs text-slate-400">
          {domains.length} domains · {apiOnline ? "live API" : "offline catalog"}
        </p>
      </div>
      <div className="pointer-events-auto flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor="spatial-search">
          Spatial search
        </label>
        <input
          id="spatial-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 360 domains — /"
          className="holo-panel w-72 rounded-full px-4 py-2 text-sm outline-none placeholder:text-slate-500 md:w-96"
        />
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
