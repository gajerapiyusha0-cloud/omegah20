"use client";

import { useExperience } from "@/lib/store";

export function CommandPalette() {
  const open = useExperience((s) => s.commandOpen);
  const setOpen = useExperience((s) => s.setCommandOpen);
  const setMode = useExperience((s) => s.setMode);
  const setQuery = useExperience((s) => s.setQuery);
  const query = useExperience((s) => s.query);

  if (!open) return null;

  const commands: { label: string; run: () => void }[] = [
    { label: "Universe", run: () => setMode("universe") },
    { label: "GIS globe", run: () => setMode("gis") },
    { label: "Simulations", run: () => setMode("sim") },
    { label: "Journal", run: () => setMode("journal") },
    { label: "Assets", run: () => setMode("assets") },
    { label: "Settings", run: () => setMode("settings") },
    { label: "Analytics", run: () => setMode("analytics") },
    { label: "Plugins", run: () => setMode("plugins") },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()) || query.length < 2);

  return (
    <div className="pointer-events-auto absolute inset-0 z-40 flex items-start justify-center bg-black/50 pt-24" onClick={() => setOpen(false)}>
      <div className="holo-panel w-[min(36rem,92vw)] rounded-3xl p-4" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Command palette">
        <p className="text-[10px] uppercase tracking-[0.3em] text-holos">Command palette · Ctrl/⌘ K</p>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-3 w-full rounded-xl bg-black/40 px-3 py-2 text-sm"
          placeholder="Jump to a module or search domains"
        />
        <ul className="mt-3 max-h-64 overflow-auto">
          {filtered.map((item) => (
            <li key={item.label}>
              <button
                className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-white/5"
                onClick={() => {
                  item.run();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
