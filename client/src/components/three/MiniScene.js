import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const WavePlane = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2.6;
      meshRef.current.position.y = -1.4 + Math.sin(t * 0.5) * 0.08;
    }
  });

  const geometry = useMemo(() => new THREE.PlaneGeometry(24, 12, 96, 48), []);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshDistortMaterial
        color="#0f766e"
        roughness={0.35}
        metalness={0.6}
        distort={0.38}
        speed={1.8}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

const GlowOrbs = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        key: i,
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 3.2,
          (Math.random() - 0.5) * 4 - 1,
        ],
        scale: 0.25 + Math.random() * 0.55,
        color: i % 2 === 0 ? "#2dd4bf" : "#fb7185",
        speed: 0.7 + Math.random() * 1.2,
      })),
    []
  );

  return (
    <group>
      {items.map((o) => (
        <Float key={o.key} speed={o.speed} rotationIntensity={0.8} floatIntensity={1.6}>
          <mesh position={o.position} scale={o.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color={o.color}
              roughness={0.2}
              metalness={0.5}
              distort={0.4}
              speed={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const MiniScene = ({ className = "" }) => {
  return (
    <div className={`oc-3d-mini ${className}`}>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.6, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 4]} intensity={20} color="#5eead4" distance={14} />
        <pointLight position={[-4, -2, 2]} intensity={12} color="#fb7185" distance={14} />
        <WavePlane />
        <GlowOrbs />
      </Canvas>
    </div>
  );
};

export default MiniScene;
