"use client";

export function BootSplash() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#04060f]">
      <div className="text-center">
        <p className="font-display text-xs tracking-[0.5em] text-holos">VIRTUAL GEOTWINVERSE</p>
        <h1 className="mt-3 font-display text-4xl">Initializing universe</h1>
        <p className="mt-2 text-sm text-slate-400">Loading domains, twins, and haptic lattice…</p>
      </div>
    </div>
  );
}
