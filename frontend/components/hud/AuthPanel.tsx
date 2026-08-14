"use client";

import { FormEvent, useState } from "react";
import { api } from "@/lib/api";

export function AuthPanel() {
  const [email, setEmail] = useState("explorer@geotwinverse.local");
  const [password, setPassword] = useState("explorer123");
  const [status, setStatus] = useState("Guest explorer");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const token = await api.login(email, password);
      sessionStorage.setItem("geotwin.token", token.access_token);
      setStatus(`Signed in as ${email}`);
    } catch {
      setStatus("Login failed — API may be offline.");
    }
  }

  return (
    <section className="pointer-events-auto absolute right-6 top-28 z-20 w-80 holo-panel rounded-3xl p-4">
      <h2 className="font-display text-sm tracking-[0.2em] text-holos">ACCOUNT</h2>
      <p className="mt-1 text-xs text-slate-400">{status}</p>
      <form onSubmit={onSubmit} className="mt-3 space-y-2">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl bg-black/30 px-3 py-2 text-sm" aria-label="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl bg-black/30 px-3 py-2 text-sm" aria-label="Password" />
        <button className="w-full rounded-xl bg-cyan-400/20 py-2 text-sm text-holos">Sign in</button>
        <button
          type="button"
          className="w-full rounded-xl border border-white/10 py-2 text-xs"
          onClick={async () => {
            const oidc = await api.oidcStart().catch(() => ({ configured: false, authorization_url: null, note: "offline" }));
            setStatus(oidc.configured && oidc.authorization_url ? "Redirecting to SSO…" : oidc.note || "SSO not configured");
            if (oidc.authorization_url) window.location.href = oidc.authorization_url;
          }}
        >
          Campus SSO (OIDC)
        </button>
      </form>
    </section>
  );
}
