"use client";

import { useMemo } from "react";
import { useExperience } from "@/lib/store";

export function CatalogDrawer() {
  const domains = useExperience((s) => s.domains);
  const category = useExperience((s) => s.category);
  const setCategory = useExperience((s) => s.setCategory);
  const query = useExperience((s) => s.query);
  const selectDomain = useExperience((s) => s.selectDomain);

  const categories = useMemo(() => {
    const set = new Set(domains.map((d) => d.category));
    return ["all", ...Array.from(set)];
  }, [domains]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return domains
      .filter((d) => category === "all" || d.category === category)
      .filter((d) => !q || d.name.toLowerCase().includes(q) || d.slug.includes(q))
      .slice(0, 40);
  }, [domains, category, query]);

  return (
    <aside className="pointer-events-auto absolute left-4 top-28 z-10 hidden max-h-[calc(100vh-11rem)] w-72 overflow-auto rounded-3xl holo-panel p-3 lg:block">
      <p className="px-1 text-[10px] uppercase tracking-[0.3em] text-holos">Encyclopedia</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-2 py-1 text-[10px] ${category === item ? "bg-cyan-400/20 text-holos" : "text-slate-400"}`}
          >
            {item === "all" ? "All" : item.split(" ")[0]}
          </button>
        ))}
      </div>
      <ul className="mt-3 space-y-1">
        {visible.map((domain) => (
          <li key={domain.slug}>
            <button
              onClick={() => selectDomain(domain)}
              className="w-full rounded-xl px-2 py-1.5 text-left text-xs hover:bg-white/5"
            >
              <span className="block text-slate-100">{domain.name}</span>
              <span className="block text-[10px] text-slate-500">{domain.category}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
