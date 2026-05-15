import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useTexture, Billboard, Environment } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const VIRI_FRAMES = [
  "/viri/viri-1.png",
  "/viri/viri-2.png",
  "/viri/viri-3.png",
  "/viri/viri-4.png",
  "/viri/viri-5.png",
  "/viri/viri-6.png",
];

function ViriMorph({ progress }: { progress: number }) {
  const ref = useRef<THREE.Group>(null!);
  const tex = useTexture(VIRI_FRAMES);
  tex.forEach((t) => (t.colorSpace = THREE.SRGBColorSpace));

  const idx = Math.min(
    VIRI_FRAMES.length - 1,
    Math.floor(progress * VIRI_FRAMES.length)
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 1.2) * 0.18;
    ref.current.rotation.z = Math.sin(t * 0.8) * 0.05;
    const targetScale = 1 + progress * 0.4;
    ref.current.scale.setScalar(
      THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.06)
    );
  });

  return (
    <group ref={ref}>
      <Billboard>
        <mesh>
          <planeGeometry args={[4, 4]} />
          <meshBasicMaterial map={tex[idx]} transparent toneMapped={false} />
        </mesh>
      </Billboard>
    </group>
  );
}

export function MascotScene({ progressRef }: { progressRef: React.RefObject<number> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setProgress(progressRef.current ?? 0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);

  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ViriMorph progress={progress} />
      </Suspense>
    </Canvas>
  );
}
