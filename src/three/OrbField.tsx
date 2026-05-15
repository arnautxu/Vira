import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Orb = {
  position: [number, number, number];
  radius: number;
  color: string;
  speed: number;
  phase: number;
};

const ORBS: Orb[] = [
  { position: [-4.2, 1.6, -2], radius: 0.55, color: "#83bcd4", speed: 0.6, phase: 0 },
  { position: [4.4, -0.8, -1.5], radius: 0.7, color: "#ff7797", speed: 0.45, phase: 1.2 },
  { position: [-3.2, -2.2, -1], radius: 0.42, color: "#b1d05e", speed: 0.55, phase: 2.1 },
  { position: [3.6, 2.4, -2.4], radius: 0.5, color: "#ffc33e", speed: 0.5, phase: 3.4 },
  { position: [0.2, -3.2, -3], radius: 0.36, color: "#d6aaff", speed: 0.7, phase: 4.0 },
];

export function OrbField({ pointer = true }: { pointer?: boolean }) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const o = ORBS[i];
      child.position.y = o.position[1] + Math.sin(t * o.speed + o.phase) * 0.4;
      child.position.x = o.position[0] + Math.cos(t * o.speed * 0.5 + o.phase) * 0.25;
    });
    if (pointer) {
      const mx = state.pointer.x;
      const my = state.pointer.y;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mx * 0.15, 0.04);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -my * 0.1, 0.04);
    }
  });

  return (
    <group ref={group}>
      {ORBS.map((o, i) => (
        <mesh key={i} position={o.position}>
          <sphereGeometry args={[o.radius, 48, 48]} />
          <meshPhysicalMaterial
            color={o.color}
            roughness={0.35}
            metalness={0.05}
            clearcoat={0.5}
            clearcoatRoughness={0.4}
            transmission={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}
