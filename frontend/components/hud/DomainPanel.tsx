"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function DomainPanel() {
  const domain = useExperience((s) => s.selectedDomain);
  const selectDomain = useExperience((s) => s.selectDomain);
  const domains = useExperience((s) => s.domains);
  const [summary, setSummary] = useState("");
  const [lessons, setLessons] = useState<string[]>([]);
  const [related, setRelated] = useState<{ slug: string; name: string }[]>([]);

  useEffect(() => {
    if (!domain) return;
    setSummary(domain.summary);
    api
      .summary(domain.slug)
      .then((res) => {
        setSummary(res.summary);
        setLessons(res.lessons);
      })
      .catch(() => {
        setLessons([
          `Foundations of ${domain.name}`,
          `Methods and models in ${domain.name}`,
          `Spatial and twin applications of ${domain.name}`,
          `Open research questions in ${domain.name}`,
        ]);
      });
    api
      .related(domain.slug)
      .then((rows) => setRelated(rows.map((r) => ({ slug: r.slug, name: r.name }))))
      .catch(() => {
        setRelated(
          domains
            .filter((d) => d.category === domain.category && d.slug !== domain.slug)
            .slice(0, 6)
            .map((d) => ({ slug: d.slug, name: d.name })),
        );
      });
  }, [domain, domains]);

  if (!domain) return null;

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[28rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <p className="text-[10px] uppercase tracking-[0.35em] text-holos">{domain.category}</p>
      <h2 className="font-display mt-1 text-2xl">{domain.name}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{summary || domain.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {lessons.map((lesson) => (
          <li key={lesson} className="rounded-xl border border-white/10 px-3 py-2">
            {lesson}
          </li>
        ))}
      </ul>
      {related.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {related.map((item) => (
            <button
              key={item.slug}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px]"
              onClick={() => {
                const next = domains.find((d) => d.slug === item.slug);
                if (next) selectDomain(next);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
      <button className="mt-4 text-xs uppercase tracking-widest text-slate-400" onClick={() => selectDomain(undefined)}>
        Close space
      </button>
    </section>
  );
}
