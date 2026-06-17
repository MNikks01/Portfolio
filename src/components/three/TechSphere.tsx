"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Points,
  PointMaterial,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleField({ count = 1600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5;
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
    ref.current.rotation.y += dt * 0.035;
    ref.current.rotation.x += dt * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#67E8F9"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

function Core() {
  const nucleus = useRef<THREE.Mesh>(null!);
  const shell = useRef<THREE.Mesh>(null!);
  const cage = useRef<THREE.Mesh>(null!);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (shell.current) {
      shell.current.rotation.y += dt * 0.22;
      shell.current.rotation.x += dt * 0.1;
    }
    if (cage.current) {
      cage.current.rotation.y -= dt * 0.16;
      cage.current.rotation.z += dt * 0.05;
    }
    if (nucleus.current) {
      const s = 1 + Math.sin(t * 1.8) * 0.07;
      nucleus.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.7}>
      {/* glowing energy nucleus */}
      <Sphere ref={nucleus} args={[0.5, 32, 32]}>
        <meshBasicMaterial color="#A5F3FC" toneMapped={false} />
      </Sphere>
      {/* additive halo around the nucleus */}
      <Sphere args={[0.85, 32, 32]}>
        <meshBasicMaterial
          color="#00D4FF"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </Sphere>

      {/* morphing wireframe shell */}
      <Icosahedron ref={shell} args={[1.6, 6]}>
        <MeshDistortMaterial
          color="#22D3EE"
          emissive="#0891B2"
          emissiveIntensity={0.5}
          wireframe
          distort={0.32}
          speed={1.4}
          roughness={0.5}
          metalness={0.2}
          toneMapped={false}
        />
      </Icosahedron>

      {/* faceted outer cage */}
      <Icosahedron ref={cage} args={[2.05, 1]}>
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.28}
          toneMapped={false}
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
        <torusGeometry args={[radius, 0.006, 16, 220]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function TechSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 6, 6]} intensity={1.2} color="#00D4FF" />
        <pointLight position={[-6, -4, 4]} intensity={1} color="#EC4899" />

        {/* shift the core toward the right so it sits beside the headline */}
        <group position={[1.1, -0.1, 0]} scale={1.05}>
          <Core />
          <OrbitRing radius={2.4} color="#00D4FF" speed={0.55} tilt={0.5} />
          <OrbitRing radius={2.9} color="#EC4899" speed={-0.38} tilt={-0.8} />
          <OrbitRing radius={3.45} color="#10B981" speed={0.28} tilt={1.1} />
        </group>

        <ParticleField count={1600} />
      </Suspense>
    </Canvas>
  );
}
