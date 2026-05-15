import { useMemo, useRef, type ComponentProps } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Vira's 8-point asterisk/compass, extruded.
 * Built from a 2D Shape with eight pointed lobes around the origin.
 */
export function CompassMesh({
  size = 1.4,
  speed = 0.18,
  color = "#bb77ff",
  ...props
}: {
  size?: number;
  speed?: number;
  color?: string;
} & Omit<ComponentProps<"mesh">, "geometry">) {
  const ref = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const lobes = 8;
    const outer = size;
    const innerWaist = size * 0.18;
    const tipRound = 0.05;

    for (let i = 0; i < lobes; i++) {
      const a0 = (i / lobes) * Math.PI * 2;
      const a1 = ((i + 0.5) / lobes) * Math.PI * 2;
      const a2 = ((i + 1) / lobes) * Math.PI * 2;

      // waist (between lobes)
      const wx0 = Math.cos(a0) * innerWaist;
      const wy0 = Math.sin(a0) * innerWaist;
      // tip
      const tx = Math.cos(a1) * outer;
      const ty = Math.sin(a1) * outer;
      // next waist
      const wx1 = Math.cos(a2) * innerWaist;
      const wy1 = Math.sin(a2) * innerWaist;

      if (i === 0) shape.moveTo(wx0, wy0);
      shape.quadraticCurveTo(
        Math.cos(a1 - 0.05) * outer * (1 - tipRound),
        Math.sin(a1 - 0.05) * outer * (1 - tipRound),
        tx,
        ty
      );
      shape.quadraticCurveTo(
        Math.cos(a1 + 0.05) * outer * (1 - tipRound),
        Math.sin(a1 + 0.05) * outer * (1 - tipRound),
        wx1,
        wy1
      );
    }

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: size * 0.18,
      bevelEnabled: true,
      bevelSegments: 6,
      bevelSize: size * 0.04,
      bevelThickness: size * 0.04,
      curveSegments: 24,
    });
    geo.center();
    return geo;
  }, [size]);

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * speed;
    ref.current.rotation.x = Math.sin(performance.now() * 0.00015) * 0.15;
  });

  return (
    <mesh ref={ref} geometry={geometry} {...props}>
      <meshPhysicalMaterial
        color={color}
        roughness={0.32}
        metalness={0.05}
        clearcoat={0.8}
        clearcoatRoughness={0.3}
        sheen={0.4}
        sheenColor={"#ffffff"}
      />
    </mesh>
  );
}
