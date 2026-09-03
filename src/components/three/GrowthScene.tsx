import { Canvas, useFrame } from "@react-three/fiber";
import { Line, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const update = () => setReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useElementVisibility<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "160px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function GrowthBars({ active, reduced }: { active: boolean; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const bars = useMemo(
    () => [
      { height: 0.9, x: -1.8, z: 0.3, color: "#18181b" },
      { height: 1.35, x: -1.1, z: -0.1, color: "#e42921" },
      { height: 1.05, x: -0.4, z: 0.15, color: "#3f3f46" },
      { height: 1.85, x: 0.3, z: -0.15, color: "#e42921" },
      { height: 1.55, x: 1, z: 0.1, color: "#18181b" },
      { height: 2.15, x: 1.7, z: -0.2, color: "#e42921" }
    ],
    []
  );

  useFrame(({ clock, pointer }) => {
    if (!active || reduced || !group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.08 - 0.18,
      0.04
    );
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.42) * 0.025 - 0.05;
  });

  return (
    <group ref={group} position={[0.15, -0.35, 0]} rotation={[-0.06, -0.18, 0]}>
      <mesh position={[0, -0.08, 0]} receiveShadow>
        <boxGeometry args={[5.2, 0.08, 2.4]} />
        <meshStandardMaterial color="#ffffff" roughness={0.52} metalness={0.04} />
      </mesh>

      {bars.map((bar) => (
        <mesh key={`${bar.x}-${bar.height}`} position={[bar.x, bar.height / 2, bar.z]} castShadow>
          <boxGeometry args={[0.34, bar.height, 0.42]} />
          <meshStandardMaterial color={bar.color} roughness={0.45} metalness={0.05} />
        </mesh>
      ))}

      <Line
        points={[
          [-2.15, 1.02, 0.42],
          [-1.36, 1.42, 0.1],
          [-0.6, 1.18, 0.32],
          [0.2, 2.02, 0.02],
          [0.95, 1.7, 0.22],
          [1.95, 2.42, 0.02]
        ]}
        color="#e42921"
        lineWidth={3}
      />

      <mesh position={[2.25, 2.56, 0.02]} castShadow>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color="#e42921" emissive="#5d0705" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function ChannelModules({ active, reduced }: { active: boolean; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const modules = useMemo(
    () => [
      { label: "mídia", x: -1.8, y: -1.45, z: 0.2 },
      { label: "CRO", x: -0.6, y: -1.62, z: -0.1 },
      { label: "CRM", x: 0.65, y: -1.48, z: 0.1 },
      { label: "market", x: 1.88, y: -1.58, z: -0.18 }
    ],
    []
  );

  useFrame(({ clock }) => {
    if (!active || reduced || !group.current) return;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.04;
  });

  return (
    <group ref={group}>
      {modules.map((module, index) => (
        <group key={module.label} position={[module.x, module.y, module.z]}>
          <mesh castShadow>
            <boxGeometry args={[0.74, 0.26, 0.5]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#18181b" : "#ffffff"} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.16, 0.02]}>
            <boxGeometry args={[0.42, 0.05, 0.04]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#ffffff" : "#e42921"} />
          </mesh>
        </group>
      ))}
      <Line
        points={modules.map((module) => [module.x, module.y + 0.22, module.z] as [number, number, number])}
        color="#71717a"
        lineWidth={1.8}
        transparent
        opacity={0.72}
      />
    </group>
  );
}

function Scene({ active, reduced }: { active: boolean; reduced: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.3, 6.2]} fov={42} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[3.5, 4, 5]} intensity={1.4} castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={0.45} />
      <GrowthBars active={active} reduced={reduced} />
      <ChannelModules active={active} reduced={reduced} />
    </>
  );
}

export default function GrowthScene() {
  const reduced = useReducedMotion();
  const { ref, visible } = useElementVisibility<HTMLDivElement>();
  const [dpr, setDpr] = useState(1.25);

  return (
    <div className="growth-scene" ref={ref} aria-hidden="true">
      <Canvas
        shadows
        dpr={reduced ? 1 : dpr}
        frameloop={visible && !reduced ? "always" : "demand"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
        <Suspense fallback={null}>
          <Scene active={visible} reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
