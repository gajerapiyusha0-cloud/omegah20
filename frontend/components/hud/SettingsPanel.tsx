"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useExperience } from "@/lib/store";

export function SettingsPanel() {
  const locale = useExperience((s) => s.locale);
  const setLocale = useExperience((s) => s.setLocale);
  const reducedMotion = useExperience((s) => s.reducedMotion);
  const setReducedMotion = useExperience((s) => s.setReducedMotion);
  const [locales, setLocales] = useState<{ code: string; name: string }[]>([]);

  useEffect(() => {
    api.locales().then(setLocales).catch(() => setLocales([{ code: "en", name: "English" }]));
  }, []);

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[28rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5 lg:left-[20rem]">
      <h2 className="font-display text-2xl">Settings</h2>
      <label className="mt-4 block text-xs uppercase tracking-widest text-slate-400">
        Locale
        <select value={locale} onChange={(e) => setLocale(e.target.value)} className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-sm text-slate-100">
          {locales.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-4 flex items-center gap-2 text-sm">
        <input type="checkbox" checked={reducedMotion} onChange={(e) => setReducedMotion(e.target.checked)} />
        Reduce motion
      </label>
      <p className="mt-3 text-xs text-slate-500">Gamepad rumble is used automatically when a controller is connected. Haptics stay optional.</p>
    </section>
  );
}
