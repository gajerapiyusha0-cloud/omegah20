"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

export default function OidcCallbackPage() {
  const [status, setStatus] = useState("Completing campus SSO…");

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      setStatus("Missing authorization code.");
      return;
    }
    fetch(`${API_URL}/auth/oidc/callback?code=${encodeURIComponent(code)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json() as Promise<{ access_token: string }>;
      })
      .then((token) => {
        sessionStorage.setItem("geotwin.token", token.access_token);
        setStatus("Signed in. Returning to the universe…");
        window.location.replace("/");
      })
      .catch(() => setStatus("SSO exchange failed. Return to Admin and try email login."));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-void text-slate-200">
      <p className="holo-panel rounded-3xl px-6 py-4 text-sm">{status}</p>
    </main>
  );
}
