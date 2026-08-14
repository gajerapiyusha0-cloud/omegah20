import { describe, expect, it } from "vitest";
import { hapticForAction } from "./haptic";

describe("haptic mapping", () => {
  it("maps selection to object pulse", () => {
    expect(hapticForAction("select")).toBe("sel.object");
  });
  it("falls back to button", () => {
    expect(hapticForAction("unknown")).toBe("sel.button");
  });
});
