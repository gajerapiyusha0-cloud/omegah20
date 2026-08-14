"use client";

export function HelpOverlay() {
  return (
    <section className="pointer-events-auto absolute bottom-24 left-6 z-20 hidden w-72 holo-panel rounded-2xl p-4 text-xs text-slate-300 md:block">
      <p className="font-display tracking-[0.25em] text-holos">GUIDE</p>
      <ul className="mt-2 space-y-1">
        <li>/ search · Ctrl/⌘ K commands</li>
        <li>U universe · G GIS · S simulate · T twins</li>
        <li>Click a sphere to enter a domain</li>
        <li>Amber markers are digital twins</li>
        <li>Haptics work without hardware</li>
      </ul>
    </section>
  );
}
