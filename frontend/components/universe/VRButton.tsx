"use client";

import { useEffect, useState } from "react";

type XRSystem = { isSessionSupported: (mode: string) => Promise<boolean>; requestSession: (mode: string, opts?: object) => Promise<XRSession> };

export function VRButton() {
  const [supported, setSupported] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const xr = (navigator as Navigator & { xr?: XRSystem }).xr;
    if (!xr) return;
    xr.isSessionSupported("immersive-vr").then(setSupported).catch(() => setSupported(false));
  }, []);

  if (!supported) return null;

  return (
    <button
      className="pointer-events-auto absolute right-6 bottom-28 z-30 holo-panel rounded-full px-4 py-2 text-xs uppercase tracking-widest"
      onClick={async () => {
        const xr = (navigator as Navigator & { xr?: XRSystem }).xr;
        if (!xr) return;
        if (active) {
          await (globalThis as { __geotwinXrSession?: XRSession }).__geotwinXrSession?.end();
          (globalThis as { __geotwinXrSession?: XRSession }).__geotwinXrSession = undefined;
          setActive(false);
          return;
        }
        const session = await xr.requestSession("immersive-vr", { optionalFeatures: ["local-floor", "hand-tracking"] });
        (globalThis as { __geotwinXrSession?: XRSession }).__geotwinXrSession = session;
        session.addEventListener("end", () => {
          (globalThis as { __geotwinXrSession?: XRSession }).__geotwinXrSession = undefined;
          setActive(false);
        });
        setActive(true);
      }}
    >
      {active ? "Exit VR" : "Enter VR"}
    </button>
  );
}
