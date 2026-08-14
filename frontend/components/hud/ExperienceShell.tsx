"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { api } from "@/lib/api";
import { useExperience } from "@/lib/store";
import { TopBar } from "./TopBar";
import { RadialMenu } from "./RadialMenu";
import { AssistantDock } from "./AssistantDock";
import { DomainPanel } from "./DomainPanel";
import { TwinPanel } from "./TwinPanel";
import { SimStudio } from "./SimStudio";
import { GraphPanel } from "./GraphPanel";
import { StatusRibbon } from "./StatusRibbon";

const UniverseCanvas = dynamic(() => import("../universe/UniverseCanvas").then((m) => m.UniverseCanvas), { ssr: false });
const CesiumViewer = dynamic(() => import("../gis/CesiumViewer").then((m) => m.CesiumViewer), { ssr: false });

export function ExperienceShell() {
  const mode = useExperience((s) => s.mode);
  const setDomains = useExperience((s) => s.setDomains);
  const setTwins = useExperience((s) => s.setTwins);

  useEffect(() => {
    api.domains().then(setDomains).catch(() => setDomains([]));
    api.twins().then(setTwins).catch(() => setTwins([]));
  }, [setDomains, setTwins]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") useExperience.getState().selectDomain(undefined);
      if (event.key.toLowerCase() === "g") useExperience.getState().setMode("gis");
      if (event.key.toLowerCase() === "u") useExperience.getState().setMode("universe");
      if (event.key === "/") {
        event.preventDefault();
        document.getElementById("spatial-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main id="main" className="relative h-screen w-screen">
      <div className="absolute inset-0">{mode === "gis" ? <CesiumViewer /> : <UniverseCanvas />}</div>
      <div className="pointer-events-none absolute inset-0 scanlines" />
      <TopBar />
      <RadialMenu />
      <AssistantDock />
      <StatusRibbon />
      {mode === "learn" && <DomainPanel />}
      {mode === "twin" && <TwinPanel />}
      {mode === "sim" && <SimStudio />}
      {mode === "graph" && <GraphPanel />}
    </main>
  );
}
