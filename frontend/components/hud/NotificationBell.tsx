"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { playHaptic } from "@/lib/haptic";
import { useExperience } from "@/lib/store";

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<{ id: string; title: string; body: string; haptic: string }[]>([]);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);

  useEffect(() => {
    api.notifications().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <div className="pointer-events-auto absolute right-6 top-4 z-30">
      <button className="holo-panel rounded-full px-3 py-2 text-xs" onClick={() => setOpen(!open)}>
        Alerts {items.length}
      </button>
      {open && (
        <ul className="mt-2 w-80 holo-panel rounded-2xl p-3 text-sm">
          {items.map((item) => (
            <li key={item.id} className="border-b border-white/10 py-2 last:border-0">
              <button
                className="text-left"
                onClick={() => hapticEnabled && playHaptic({ intensity: 0.3, duration_ms: 80 })}
              >
                <p>{item.title}</p>
                <p className="text-[11px] text-slate-400">{item.body}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
