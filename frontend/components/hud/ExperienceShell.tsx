"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { api } from "@/lib/api";
import { FALLBACK_DOMAINS, FALLBACK_TWINS } from "@/lib/fallbackCatalog";
import { useExperience } from "@/lib/store";
import { TopBar } from "./TopBar";
import { RadialMenu } from "./RadialMenu";
import { AssistantDock } from "./AssistantDock";
import { DomainPanel } from "./DomainPanel";
import { TwinPanel } from "./TwinPanel";
import { SimStudio } from "./SimStudio";
import { GraphPanel } from "./GraphPanel";
import { StatusRibbon } from "./StatusRibbon";
import { CatalogDrawer } from "./CatalogDrawer";
import { SatellitePanel } from "./SatellitePanel";
import { HapticLab } from "./HapticLab";
import { BootSplash } from "./BootSplash";
import { AnalyticsPanel } from "./AnalyticsPanel";
import { PluginStore } from "./PluginStore";
import { CollabPanel } from "./CollabPanel";
import { AdminPanel } from "./AdminPanel";
import { AuthPanel } from "./AuthPanel";
import { TimelinePanel } from "./TimelinePanel";
import { GisTools } from "./GisTools";
import { NotificationBell } from "./NotificationBell";
import { CommandPalette } from "./CommandPalette";
import { SettingsPanel } from "./SettingsPanel";
import { HelpOverlay } from "./HelpOverlay";
import { JournalPanel } from "./JournalPanel";
import { AssetLibrary } from "./AssetLibrary";
import { VRButton } from "../universe/VRButton";
import { useGamepadNav } from "@/lib/gamepad";

const UniverseCanvas = dynamic(() => import("../universe/UniverseCanvas").then((m) => m.UniverseCanvas), { ssr: false });
const CesiumViewer = dynamic(() => import("../gis/CesiumViewer").then((m) => m.CesiumViewer), { ssr: false });

export function ExperienceShell() {
  const mode = useExperience((s) => s.mode);
  const booted = useExperience((s) => s.booted);
  const setDomains = useExperience((s) => s.setDomains);
  const setTwins = useExperience((s) => s.setTwins);
  const setBooted = useExperience((s) => s.setBooted);
  const setCommandOpen = useExperience((s) => s.setCommandOpen);
  useGamepadNav();

  useEffect(() => {
    let cancelled = false;
    api
      .bootstrap()
      .then((payload) => {
        if (cancelled) return;
        setDomains(payload.domains);
        setTwins(payload.twins);
        setBooted(true, true);
      })
      .catch(() => {
        if (cancelled) return;
        setDomains(FALLBACK_DOMAINS);
        setTwins(FALLBACK_TWINS);
        setBooted(true, false);
      });
    return () => {
      cancelled = true;
    };
  }, [setDomains, setTwins, setBooted]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
        return;
      }
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (event.key === "Escape") useExperience.getState().selectDomain(undefined);
      if (event.key.toLowerCase() === "g") useExperience.getState().setMode("gis");
      if (event.key.toLowerCase() === "u") useExperience.getState().setMode("universe");
      if (event.key.toLowerCase() === "s") useExperience.getState().setMode("sim");
      if (event.key.toLowerCase() === "t") useExperience.getState().setMode("twin");
      if (event.key === "/") {
        event.preventDefault();
        document.getElementById("spatial-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setCommandOpen]);

  return (
    <main id="main" className="relative h-screen w-screen">
      <div className="absolute inset-0">{mode === "gis" ? <CesiumViewer /> : <UniverseCanvas />}</div>
      <div className="pointer-events-none absolute inset-0 scanlines" />
      <TopBar />
      <NotificationBell />
      <CatalogDrawer />
      <RadialMenu />
      <AssistantDock />
      <StatusRibbon />
      {mode === "learn" && <DomainPanel />}
      {mode === "twin" && <TwinPanel />}
      {mode === "sim" && <SimStudio />}
      {mode === "graph" && <GraphPanel />}
      {mode === "satellite" && <SatellitePanel />}
      {mode === "haptics" && <HapticLab />}
      {mode === "analytics" && <AnalyticsPanel />}
      {mode === "plugins" && <PluginStore />}
      {mode === "collab" && <CollabPanel />}
      {mode === "admin" && (
        <>
          <AdminPanel />
          <AuthPanel />
        </>
      )}
      {mode === "timeline" && <TimelinePanel />}
      {mode === "journal" && <JournalPanel />}
      {mode === "assets" && <AssetLibrary />}
      {mode === "settings" && <SettingsPanel />}
      {mode === "gis" && <GisTools />}
      <HelpOverlay />
      <CommandPalette />
      <VRButton />
      {!booted && <BootSplash />}
    </main>
  );
}
