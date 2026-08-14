"use client";

import { useExperience } from "@/lib/store";

export function TwinMarkers() {
  const twins = useExperience((s) => s.twins);
  const selectTwin = useExperience((s) => s.selectTwin);

  return (
    <group>
      {twins.map((twin) => {
        const lon = (twin.longitude * Math.PI) / 180;
        const lat = (twin.latitude * Math.PI) / 180;
        const r = 1.04;
        const x = r * Math.cos(lat) * Math.cos(lon);
        const y = r * Math.sin(lat);
        const z = r * Math.cos(lat) * Math.sin(lon);
        return (
          <mesh key={twin.slug} position={[x, y, z]} onClick={(e) => { e.stopPropagation(); selectTwin(twin); }}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        );
      })}
    </group>
  );
}
