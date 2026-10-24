import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";
import Particles from "./Particles";
import { getHeartGeometry } from "./heartGeometry";

const Heart = () => {
  const groupRef = useRef();
  const coreRef = useRef();
  const shellRef = useRef();
  const geometry = useMemo(() => getHeartGeometry(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.position.y = Math.sin(t * 0.9) * 0.18;
    }
    if (coreRef.current) {
      const beat = 1 + Math.sin(t * 2.6) * 0.045 + Math.sin(t * 5.2) * 0.015;
      coreRef.current.scale.setScalar(beat);
    }
    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.55;
      shellRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.05}>
      <mesh ref={coreRef} geometry={geometry} rotation={[Math.PI, 0.35, 0]}>
        <meshPhysicalMaterial
          color="#ff4d6d"
          emissive="#9f1239"
          emissiveIntensity={0.55}
          roughness={0.18}
          metalness={0.35}
          clearcoat={1}
          clearcoatRoughness={0.12}
          reflectivity={1}
        />
      </mesh>
      <mesh
        ref={shellRef}
        geometry={geometry}
        rotation={[Math.PI, 0.35, 0]}
        scale={1.16}
      >
        <meshBasicMaterial
          color="#5eead4"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
      <pointLight color="#ff4d6d" intensity={22} distance={9} position={[0, 0, 2.4]} />
    </group>
  );
};

const DistortBlob = ({ position, scale, color, distort, speed }) => (
  <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 48, 48]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.25}
        metalness={0.55}
        distort={distort}
        speed={1.6}
        transparent
        opacity={0.85}
      />
    </mesh>
  </Float>
);

const Orbiters = () => {
  const groupRef = useRef();
  const geo = useMemo(
    () => ({
      octa: new THREE.OctahedronGeometry(0.16, 0),
      torus: new THREE.TorusGeometry(0.22, 0.06, 16, 48),
      icosa: new THREE.IcosahedronGeometry(0.15, 0),
    }),
    []
  );
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#99f6e4",
        emissive: "#0d9488",
        emissiveIntensity: 0.7,
        metalness: 0.7,
        roughness: 0.25,
      }),
    []
  );

  const items = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => {
        const a = (i / 9) * Math.PI * 2;
        return {
          key: i,
          angle: a,
          radius: 2.6 + (i % 3) * 0.55,
          yOffset: Math.sin(a * 2) * 0.9,
          geo: [geo.octa, geo.torus, geo.icosa][i % 3],
          speed: 0.25 + (i % 4) * 0.08,
        };
      }),
    [geo]
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x += delta * items[i].speed;
      child.rotation.z += delta * items[i].speed * 0.6;
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((item) => (
        <mesh
          key={item.key}
          geometry={item.geo}
          material={mat}
          position={[
            Math.cos(item.angle) * item.radius,
            item.yOffset,
            Math.sin(item.angle) * item.radius - 1.5,
          ]}
        />
      ))}
    </group>
  );
};

const CameraRig = () => {
  const { camera, pointer } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    target.x = pointer.x * 0.6;
    target.y = pointer.y * 0.35;
    camera.position.x += (target.x - camera.position.x) * 0.04;
    camera.position.y += (target.y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const HeroScene = ({ className = "" }) => {
  return (
    <div className={`oc-3d-hero ${className}`}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#04100f"]} />
        <fog attach="fog" args={["#04100f", 8, 22]} />

        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 6, 6]} intensity={1.1} color="#ccfbf1" />
        <pointLight position={[-6, -3, 2]} intensity={18} color="#14b8a6" distance={16} />
        <pointLight position={[6, 4, -3]} intensity={14} color="#f472b6" distance={16} />

        <Stars radius={60} depth={40} count={2600} factor={3.2} saturation={0} fade speed={0.6} />
        <Particles count={850} radius={13} color="#2dd4bf" size={0.03} opacity={0.7} />
        <Particles count={220} radius={9} color="#fb7185" size={0.045} opacity={0.55} speed={0.035} />

        <Heart />
        <Orbiters />

        <DistortBlob position={[-3.6, 1.6, -3]} scale={1.5} color="#0f766e" distort={0.42} speed={1.1} />
        <DistortBlob position={[3.8, -1.8, -4]} scale={2.1} color="#115e59" distort={0.5} speed={0.8} />
        <DistortBlob position={[2.8, 2.4, -6]} scale={1.2} color="#831843" distort={0.35} speed={1.4} />

        <CameraRig />

        <EffectComposer multisampling={0}>
          <Bloom intensity={0.85} luminanceThreshold={0.22} luminanceSmoothing={0.3} mipmapBlur radius={0.7} />
          <ChromaticAberration offset={[0.0006, 0.0009]} />
          <Vignette eskil={false} offset={0.25} darkness={0.85} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default HeroScene;
