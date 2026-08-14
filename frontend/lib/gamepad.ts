"use client";

import { useEffect } from "react";
import { useExperience } from "@/lib/store";

export function useGamepadNav() {
  const setMode = useExperience((s) => s.setMode);
  useEffect(() => {
    let frame = 0;
    const poll = () => {
      const pads = navigator.getGamepads?.() || [];
      for (const pad of pads) {
        if (!pad) continue;
        if (pad.buttons[0]?.pressed) setMode("learn");
        if (pad.buttons[1]?.pressed) setMode("universe");
        if (pad.buttons[2]?.pressed) setMode("gis");
        if (pad.buttons[3]?.pressed) setMode("sim");
      }
      frame = requestAnimationFrame(poll);
    };
    frame = requestAnimationFrame(poll);
    return () => cancelAnimationFrame(frame);
  }, [setMode]);
}
