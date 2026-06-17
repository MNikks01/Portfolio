"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleField({ count = 1500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 4.5;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.04;
    ref.current.rotation.x += dt * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22D3EE"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.25;
    ref.current.rotation.y += dt * 0.4;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[1.45, 2]}>
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#00D4FF"
          emissiveIntensity={0.6}
          metalness={0.85}
          roughness={0.18}
          wireframe={false}
        />
      </Icosahedron>
      <Icosahedron args={[1.55, 1]}>
        <meshBasicMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.35}
        />
      </Icosahedron>
      <Icosahedron args={[1.95, 0]}>
        <meshBasicMaterial
          color="#EC4899"
          wireframe
          transparent
          opacity={0.18}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitRing({
  radius,
  color,
  speed,
  tilt,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * speed;
  });
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.005, 16, 200]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.4}
        />
      </mesh>
    </group>
  );
}

export default function TechSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <pointLight position={[6, 6, 6]} intensity={1.4} color="#00D4FF" />
        <pointLight position={[-6, -4, 4]} intensity={1.2} color="#EC4899" />
        <pointLight position={[0, 0, 8]} intensity={0.6} color="#8B5CF6" />
        <Core />
        <OrbitRing radius={2.4} color="#00D4FF" speed={0.6} tilt={0.5} />
        <OrbitRing radius={2.9} color="#EC4899" speed={-0.4} tilt={-0.8} />
        <OrbitRing radius={3.4} color="#10B981" speed={0.3} tilt={1.1} />
        <ParticleField count={1400} />
      </Suspense>
    </Canvas>
  );
}
