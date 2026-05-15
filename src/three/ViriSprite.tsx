import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Billboard } from "@react-three/drei";
import * as THREE from "three";

export function ViriSprite({
  src,
  scale = 2,
  bob = 0.18,
  speed = 1,
  position = [0, 0, 0],
}: {
  src: string;
  scale?: number;
  bob?: number;
  speed?: number;
  position?: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null!);
  const tex = useTexture(src);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = position[1] + Math.sin(t) * bob;
    ref.current.rotation.z = Math.sin(t * 0.6) * 0.04;
  });

  return (
    <group ref={ref} position={position}>
      <Billboard>
        <mesh>
          <planeGeometry args={[scale, scale]} />
          <meshBasicMaterial map={tex} transparent toneMapped={false} />
        </mesh>
      </Billboard>
    </group>
  );
}
