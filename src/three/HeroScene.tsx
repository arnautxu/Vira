import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { CompassMesh } from "./CompassMesh";
import { ViriSprite } from "./ViriSprite";
import { OrbField } from "./OrbField";

export function HeroScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.75]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />
      <color attach="background" args={["#faf7ff"]} />
      <fog attach="fog" args={["#faf7ff", 8, 18]} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, 4]} intensity={0.45} color={"#ff7797"} />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <CompassMesh size={1.9} position={[-0.3, 0.2, 0]} />
        <ViriSprite src="/viri/viri-1.png" scale={3.2} position={[2.6, -0.4, 1.4]} speed={0.9} />
        <OrbField />
      </Suspense>

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
