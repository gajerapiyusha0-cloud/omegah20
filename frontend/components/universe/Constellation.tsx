"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useExperience } from "@/lib/store";
import { playHaptic } from "@/lib/haptic";
import { api } from "@/lib/api";

export function Constellation() {
  const domains = useExperience((s) => s.domains);
  const query = useExperience((s) => s.query);
  const selected = useExperience((s) => s.selectedDomain);
  const selectDomain = useExperience((s) => s.selectDomain);
  const hapticEnabled = useExperience((s) => s.hapticEnabled);
  const setLastHaptic = useExperience((s) => s.setLastHaptic);
  const mesh = useRef<THREE.InstancedMesh>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return domains;
    return domains.filter(
      (d) => d.name.toLowerCase().includes(q) || d.category.toLowerCase().includes(q) || d.slug.includes(q),
    );
  }, [domains, query]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    if (!mesh.current) return;
    filtered.forEach((domain, i) => {
      const phi = (domain.orbit * Math.PI) / 180;
      const theta = (domain.inclination * Math.PI) / 180;
      const r = 1.55 + (i % 5) * 0.08;
      dummy.position.set(
        r * Math.cos(theta) * Math.cos(phi),
        r * Math.sin(theta),
        r * Math.cos(theta) * Math.sin(phi),
      );
      const scale = selected?.slug === domain.slug ? 1.8 : 1;
      dummy.scale.setScalar(0.035 * scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
      color.set(domain.color);
      mesh.current!.setColorAt(i, color);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, Math.max(filtered.length, 1)]}
      onClick={async (event) => {
        event.stopPropagation();
        const id = event.instanceId ?? 0;
        const domain = filtered[id];
        if (!domain) return;
        selectDomain(domain);
        if (hapticEnabled) {
          playHaptic({ intensity: 0.4, duration_ms: 60 });
          setLastHaptic("sel.object");
          void api.playHaptic("sel.object").catch(() => undefined);
        }
      }}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial emissive="#67e8f9" emissiveIntensity={0.35} metalness={0.2} roughness={0.35} />
    </instancedMesh>
  );
}
