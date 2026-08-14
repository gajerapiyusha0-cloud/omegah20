"use client";

import { FormEvent, useState } from "react";
import { api } from "@/lib/api";

export function GisTools() {
  const [fromLon, setFromLon] = useState("-122.42");
  const [fromLat, setFromLat] = useState("37.77");
  const [toLon, setToLon] = useState("-1.26");
  const [toLat, setToLat] = useState("51.75");
  const [result, setResult] = useState("");

  async function measure(event: FormEvent) {
    event.preventDefault();
    const payload = await api.measure({
      from_lon: Number(fromLon),
      from_lat: Number(fromLat),
      to_lon: Number(toLon),
      to_lat: Number(toLat),
    });
    setResult(`${payload.kilometers.toFixed(1)} km`);
  }

  return (
    <section className="pointer-events-auto absolute left-6 top-28 z-20 w-[26rem] max-w-[calc(100vw-3rem)] holo-panel rounded-3xl p-5">
      <h2 className="font-display text-xl">GIS tools</h2>
      <form onSubmit={measure} className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <input value={fromLon} onChange={(e) => setFromLon(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="from longitude" />
        <input value={fromLat} onChange={(e) => setFromLat(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="from latitude" />
        <input value={toLon} onChange={(e) => setToLon(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="to longitude" />
        <input value={toLat} onChange={(e) => setToLat(e.target.value)} className="rounded-lg bg-black/30 px-2 py-1" aria-label="to latitude" />
        <button className="col-span-2 rounded-xl bg-cyan-400/20 py-2 text-holos">Measure great-circle</button>
      </form>
      {result && <p className="mt-2 text-sm text-holos">{result}</p>}
    </section>
  );
}
