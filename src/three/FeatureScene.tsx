import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const TILES = [
  { color: "#83bcd4", x: -3, y: 1.6 },
  { color: "#ff7797", x: 3, y: 1.4 },
  { color: "#b1d05e", x: -2.6, y: -1.6 },
  { color: "#ffc33e", x: 2.8, y: -1.8 },
];

function FloatingTiles() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.position.y = TILES[i].y + Math.sin(t * 0.6 + i) * 0.25;
      child.rotation.x = Math.sin(t * 0.4 + i) * 0.25;
      child.rotation.y = t * 0.3 + i;
    });
  });
  return (
    <group ref={group}>
      {TILES.map((tile, i) => (
        <mesh key={i} position={[tile.x, tile.y, -1]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshPhysicalMaterial
            color={tile.color}
            roughness={0.4}
            metalness={0.1}
            clearcoat={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export function FeatureScene() {
  return (
    <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 4]} intensity={0.9} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <FloatingTiles />
      </Suspense>
    </Canvas>
  );
}
