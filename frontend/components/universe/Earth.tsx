"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

export function Earth() {
  const ref = useRef<Mesh>(null);
  const atmosphere = useRef<Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    if (ref.current) ref.current.rotation.y += delta * 0.05;
    if (atmosphere.current) atmosphere.current.rotation.y -= delta * 0.02;
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
      </mesh>
      <mesh ref={atmosphere} scale={1.08}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

const vertex = `
varying vec3 vPos;
void main() {
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = `
varying vec3 vPos;
uniform float uTime;
void main() {
  float lat = asin(clamp(vPos.y, -1.0, 1.0));
  float lon = atan(vPos.z, vPos.x);
  float land = sin(lon * 6.0 + lat * 4.0 + uTime * 0.05) * 0.5 + 0.5;
  vec3 ocean = vec3(0.02, 0.12, 0.28);
  vec3 continent = vec3(0.12, 0.42, 0.32);
  vec3 ice = vec3(0.82, 0.92, 1.0);
  vec3 color = mix(ocean, continent, smoothstep(0.45, 0.72, land));
  color = mix(color, ice, smoothstep(0.72, 1.0, abs(vPos.y)));
  float night = pow(1.0 - max(dot(normalize(vPos), vec3(0.6, 0.3, 0.5)), 0.0), 2.0);
  color += vec3(0.35, 0.22, 0.05) * night * 0.25;
  gl_FragColor = vec4(color, 1.0);
}
`;
