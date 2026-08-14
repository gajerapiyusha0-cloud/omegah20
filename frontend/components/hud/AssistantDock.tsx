"use client";

import { FormEvent, useState } from "react";
import { api } from "@/lib/api";
import { playHaptic } from "@/lib/haptic";
import { useExperience } from "@/lib/store";

export function AssistantDock() {
  const open = useExperience((s) => s.assistantOpen);
  const toggle = useExperience((s) => s.toggleAssistant);
  const locale = useExperience((s) => s.locale);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("Ask me to navigate domains, run simulations, or explain a twin.");
  const [path, setPath] = useState<string[]>([]);
  const [related, setRelated] = useState<{ slug: string; name: string }[]>([]);
  const domains = useExperience((s) => s.domains);
  const selectDomain = useExperience((s) => s.selectDomain);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!message.trim()) return;
    const res = await api.assist(message, locale).catch(() => ({
      reply: "API offline. Use the encyclopedia drawer or constellation while the backend starts.",
      learning_path: ["Open a domain sphere", "Inspect lessons", "Run a simulation"],
      related_domains: [] as { slug: string; name: string }[],
    }));
    setReply(res.reply);
    setPath(res.learning_path);
    setRelated(res.related_domains || []);
    setMessage("");
    if (hapticEnabled) playHaptic({ intensity: 0.28, duration_ms: 70 });
  }

  function listen() {
    const Speech = (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognition }).webkitSpeechRecognition
      || (window as unknown as { SpeechRecognition?: new () => SpeechRecognition }).SpeechRecognition;
    if (!Speech) {
      setReply("Voice recognition is not available in this browser. Type a command instead.");
      return;
    }
    const rec = new Speech();
    rec.lang = locale;
    rec.onresult = (ev: SpeechRecognitionEvent) => {
      const text = ev.results[0][0].transcript;
      setMessage(text);
    };
    rec.start();
  }

  if (!open) {
    return (
      <button className="pointer-events-auto absolute bottom-8 right-6 z-20 holo-panel rounded-full px-4 py-2 text-sm" onClick={toggle}>
        Assistant
      </button>
    );
  }

  return (
    <aside className="pointer-events-auto absolute bottom-24 right-6 z-20 w-96 max-w-[calc(100vw-2rem)] holo-panel rounded-2xl p-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-display text-sm tracking-[0.2em] text-holos">AI CORE</h2>
        <button onClick={toggle} className="text-xs text-slate-400">Hide</button>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-slate-200">{reply}</p>
      {path.length > 0 && (
        <ol className="mb-3 list-decimal space-y-1 pl-4 text-xs text-slate-400">
          {path.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}
      {related.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1">
          {related.map((item) => (
            <button
              key={item.slug}
              className="rounded-full border border-white/10 px-2 py-0.5 text-[11px]"
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
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Voice or type a command"
          className="flex-1 rounded-xl bg-black/30 px-3 py-2 text-sm outline-none"
        />
        <button type="button" onClick={listen} className="rounded-xl border border-cyan-400/30 px-2 text-xs">
          Mic
        </button>
        <button type="submit" className="rounded-xl bg-cyan-400/20 px-3 text-sm text-holos">
          Send
        </button>
      </form>
    </aside>
  );
}

type SpeechRecognition = {
  lang: string;
  start: () => void;
  onresult: ((ev: SpeechRecognitionEvent) => void) | null;
};

type SpeechRecognitionEvent = { results: { 0: { 0: { transcript: string } } } };
