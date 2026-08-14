import { create } from "zustand";
import type { Domain, Twin } from "./api";

export type Mode =
  | "universe"
  | "gis"
  | "graph"
  | "twin"
  | "sim"
  | "learn"
  | "satellite"
  | "haptics"
  | "analytics"
  | "plugins"
  | "collab"
  | "admin"
  | "timeline"
  | "journal"
  | "assets"
  | "settings";

type ExperienceState = {
  mode: Mode;
  theme: "dark" | "light";
  hapticEnabled: boolean;
  reducedMotion: boolean;
  locale: string;
  query: string;
  category: string;
  domains: Domain[];
  twins: Twin[];
  selectedDomain?: Domain;
  selectedTwin?: Twin;
  assistantOpen: boolean;
  lastHaptic: string;
  booted: boolean;
  apiOnline: boolean;
  setMode: (mode: Mode) => void;
  setTheme: (theme: "dark" | "light") => void;
  setHapticEnabled: (value: boolean) => void;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setDomains: (domains: Domain[]) => void;
  setTwins: (twins: Twin[]) => void;
  selectDomain: (domain?: Domain) => void;
  selectTwin: (twin?: Twin) => void;
  toggleAssistant: () => void;
  setLastHaptic: (id: string) => void;
  setBooted: (booted: boolean, apiOnline: boolean) => void;
  setLocale: (locale: string) => void;
  setReducedMotion: (value: boolean) => void;
  commandOpen: boolean;
  setCommandOpen: (value: boolean) => void;
};

export const useExperience = create<ExperienceState>((set) => ({
  mode: "universe",
  theme: "dark",
  hapticEnabled: true,
  reducedMotion: false,
  locale: "en",
  query: "",
  category: "all",
  domains: [],
  twins: [],
  assistantOpen: true,
  lastHaptic: "",
  booted: false,
  apiOnline: false,
  commandOpen: false,
  setMode: (mode) => set({ mode }),
  setTheme: (theme) => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }
    set({ theme });
  },
  setHapticEnabled: (hapticEnabled) => set({ hapticEnabled }),
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setDomains: (domains) => set({ domains }),
  setTwins: (twins) => set({ twins }),
  selectDomain: (selectedDomain) => set({ selectedDomain, mode: selectedDomain ? "learn" : "universe" }),
  selectTwin: (selectedTwin) => set({ selectedTwin, mode: selectedTwin ? "twin" : "universe" }),
  toggleAssistant: () => set((s) => ({ assistantOpen: !s.assistantOpen })),
  setLastHaptic: (lastHaptic) => set({ lastHaptic }),
  setBooted: (booted, apiOnline) => set({ booted, apiOnline }),
  setLocale: (locale) => set({ locale }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setCommandOpen: (commandOpen) => set({ commandOpen }),
}));
