import { create } from "zustand";
import type { Domain, Twin } from "./api";

export type Mode = "universe" | "gis" | "graph" | "twin" | "sim" | "learn";

type ExperienceState = {
  mode: Mode;
  theme: "dark" | "light";
  hapticEnabled: boolean;
  reducedMotion: boolean;
  locale: string;
  query: string;
  domains: Domain[];
  twins: Twin[];
  selectedDomain?: Domain;
  selectedTwin?: Twin;
  radialOpen: boolean;
  assistantOpen: boolean;
  lastHaptic: string;
  setMode: (mode: Mode) => void;
  setTheme: (theme: "dark" | "light") => void;
  setHapticEnabled: (value: boolean) => void;
  setQuery: (query: string) => void;
  setDomains: (domains: Domain[]) => void;
  setTwins: (twins: Twin[]) => void;
  selectDomain: (domain?: Domain) => void;
  selectTwin: (twin?: Twin) => void;
  toggleRadial: () => void;
  toggleAssistant: () => void;
  setLastHaptic: (id: string) => void;
};

export const useExperience = create<ExperienceState>((set) => ({
  mode: "universe",
  theme: "dark",
  hapticEnabled: true,
  reducedMotion: false,
  locale: "en",
  query: "",
  domains: [],
  twins: [],
  radialOpen: false,
  assistantOpen: true,
  lastHaptic: "",
  setMode: (mode) => set({ mode }),
  setTheme: (theme) => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }
    set({ theme });
  },
  setHapticEnabled: (hapticEnabled) => set({ hapticEnabled }),
  setQuery: (query) => set({ query }),
  setDomains: (domains) => set({ domains }),
  setTwins: (twins) => set({ twins }),
  selectDomain: (selectedDomain) => set({ selectedDomain, mode: selectedDomain ? "learn" : "universe" }),
  selectTwin: (selectedTwin) => set({ selectedTwin, mode: selectedTwin ? "twin" : "universe" }),
  toggleRadial: () => set((s) => ({ radialOpen: !s.radialOpen })),
  toggleAssistant: () => set((s) => ({ assistantOpen: !s.assistantOpen })),
  setLastHaptic: (lastHaptic) => set({ lastHaptic }),
}));
