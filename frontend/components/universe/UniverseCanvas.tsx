"use client";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Earth } from "./Earth";
import { Constellation } from "./Constellation";
import { TwinMarkers } from "./TwinMarkers";
import { useExperience } from "@/lib/store";

function XRBinder() {
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    gl.xr.enabled = true;
    const id = window.setInterval(() => {
      const session = (globalThis as { __geotwinXrSession?: XRSession }).__geotwinXrSession;
      if (session && gl.xr.getSession() !== session) {
        void gl.xr.setSession(session);
      }
    }, 500);
    return () => window.clearInterval(id);
  }, [gl]);
  return null;
}

export function UniverseCanvas() {
  const reducedMotion = useExperience((s) => s.reducedMotion);
  return (
    <Canvas
      camera={{ position: [0, 1.2, 4.2], fov: 48 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.xr.enabled = true;
      }}
    >
      <color attach="background" args={["#02030a"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 3, 2]} intensity={1.4} />
      <pointLight position={[-3, -2, -4]} color="#7c3aed" intensity={1.2} />
      <Stars radius={80} depth={40} count={reducedMotion ? 400 : 2500} factor={3} fade />
      <XRBinder />
      <Earth />
      <Constellation />
      <TwinMarkers />
      <OrbitControls enablePan={false} minDistance={2.2} maxDistance={9} autoRotate={!reducedMotion} autoRotateSpeed={0.35} />
    </Canvas>
  );
}
