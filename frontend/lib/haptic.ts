export type HapticChannel = "vibration" | "gamepad" | "noop";

function vibrate(ms: number, intensity: number) {
  if (typeof navigator === "undefined" || !navigator.vibrate) return false;
  const scaled = Math.max(10, Math.round(ms * (0.4 + intensity)));
  return navigator.vibrate(scaled);
}

function rumble(duration: number, intensity: number) {
  if (typeof navigator === "undefined" || !navigator.getGamepads) return false;
  const pads = navigator.getGamepads();
  let used = false;
  for (const pad of pads) {
    const actuator = pad?.vibrationActuator;
    if (actuator?.playEffect) {
      void actuator.playEffect("dual-rumble", {
        duration,
        strongMagnitude: intensity,
        weakMagnitude: intensity * 0.6,
      });
      used = true;
    }
  }
  return used;
}

export function playHaptic(pattern: { intensity?: number; duration_ms?: number; waveform?: string } | null) {
  if (!pattern) return { channel: "noop" as HapticChannel };
  const intensity = pattern.intensity ?? 0.4;
  const duration = pattern.duration_ms && pattern.duration_ms > 0 ? pattern.duration_ms : 80;
  if (rumble(duration, intensity)) return { channel: "gamepad" as HapticChannel };
  if (vibrate(duration, intensity)) return { channel: "vibration" as HapticChannel };
  return { channel: "noop" as HapticChannel };
}

export function hapticForAction(action: string): string {
  const map: Record<string, string> = {
    select: "sel.object",
    hover: "sel.hover",
    save: "sel.save",
    error: "col.error",
    portal: "nav.portal",
    ai: "col.ai",
    flood: "env.ocean",
    forest: "env.forest",
  };
  return map[action] ?? "sel.button";
}
