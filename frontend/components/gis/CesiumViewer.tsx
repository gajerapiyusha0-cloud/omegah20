"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "@/lib/store";

export function CesiumViewer() {
  const host = useRef<HTMLDivElement>(null);
  const twins = useExperience((s) => s.twins);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/cesium/Widgets/widgets.css";
    document.head.appendChild(link);

    let destroyed = false;
    let viewer: { destroy?: () => void } | null = null;

    async function boot() {
      (window as unknown as { CESIUM_BASE_URL: string }).CESIUM_BASE_URL = "/cesium/";
      const Cesium = await import("cesium");
      if (!host.current || destroyed) return;

      const osm = new Cesium.OpenStreetMapImageryProvider({
        url: "https://tile.openstreetmap.org/",
      });
      viewer = new Cesium.Viewer(host.current, {
        animation: false,
        timeline: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        fullscreenButton: false,
        terrainProvider: new Cesium.EllipsoidTerrainProvider(),
        baseLayer: new Cesium.ImageryLayer(osm),
      });
      const v = viewer as unknown as {
        entities: { add: (e: unknown) => void };
        camera: { flyTo: (opts: unknown) => void };
      };
      twins.forEach((twin) => {
        v.entities.add({
          name: twin.name,
          position: Cesium.Cartesian3.fromDegrees(twin.longitude, twin.latitude),
          point: { pixelSize: 12, color: Cesium.Color.CYAN },
          label: {
            text: twin.name,
            font: "12px sans-serif",
            fillColor: Cesium.Color.WHITE,
            pixelOffset: new Cesium.Cartesian2(0, -18),
          },
        });
      });
      v.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-20, 20, 16_000_000),
        duration: 1.4,
      });
    }

    boot().catch(() => {
      if (host.current) {
        host.current.innerHTML =
          "<div style='padding:2rem;color:#67e8f9'>Cesium assets unavailable. Universe mode remains fully functional.</div>";
      }
    });

    return () => {
      destroyed = true;
      viewer?.destroy?.();
      link.remove();
    };
  }, [twins]);

  return <div ref={host} className="h-full w-full" role="application" aria-label="Cesium geospatial globe" />;
}
