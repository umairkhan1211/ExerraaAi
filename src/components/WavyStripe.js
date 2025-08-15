
"use client";
import { Canvas, useFrame, invalidate } from "@react-three/fiber";
import { useRef, useMemo, memo } from "react";
import { CatmullRomCurve3, Color, Vector3, InstancedMesh, Matrix4 } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { AdaptiveDpr } from "@react-three/drei";

// === Tube as one geometry, split visually into segments ===
function WavyTube({ color, radius, speed, waveOffset, quality }) {
  const meshRef = useRef();

  // segment count changes with quality
  const points = useMemo(() => {
    const count = quality === "mobile" ? 48 : 96;
    const arr = [];
    for (let i = 0; i < count; i++) {
      const x = i * 0.24 - 12;
      const y =
        Math.sin(i * 0.25 + waveOffset) * 0.25 +
        Math.sin(i * 0.1 + waveOffset * 0.5) * 0.1;
      const z = Math.cos(i * 0.15 + waveOffset * 0.7) * 0.15;
      arr.push(new Vector3(x, y, z));
    }
    return arr;
  }, [waveOffset, quality]);

  const curve = useMemo(() => new CatmullRomCurve3(points), [points]);

  const tubeGeometryArgs = useMemo(
    () => [curve, quality === "mobile" ? 40 : 60, radius, 6, false],
    [curve, radius, quality]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;
    meshRef.current.position.y = Math.sin(t * speed) * 0.03;
    meshRef.current.rotation.x = Math.sin(t * speed * 0.7) * 0.01;
    meshRef.current.rotation.z = Math.cos(t * speed * 0.5) * 0.01;
    invalidate(); // only render when animating
  });

  return (
    <mesh ref={meshRef}>
      <tubeGeometry args={tubeGeometryArgs} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.6}
        roughness={0.05}
        metalness={0.9}
      />
    </mesh>
  );
}

function WavyStripeComponent({ quality }) {
  const layerColors = useMemo(
    () => [
      "#ffffff",
      "#f2f2f2",
      "#e0e0e0",
      "#cccccc",
      "#b8b8b8",
      "#a3a3a3",
      "#8f8f8f",
      "#7a7a7a",
      "#666666",
      "#525252",
    ],
    []
  );

  const baseRadius = 0.078;
  const radiusDecrement = 0.0095;
  const ySpacing = 0.05;
  const baseSpeed = 1.0;
  const speedIncrement = 0.1;
  const waveOffsetIncrement = 0.22;

  const tubes = useMemo(
    () =>
      layerColors.map((color, i) => (
        <group key={i} position={[0, -2.2 + i * ySpacing, 0]}>
          <WavyTube
            quality={quality}
            color={new Color(color)}
            radius={baseRadius - i * radiusDecrement}
            speed={baseSpeed + i * speedIncrement}
            waveOffset={i * waveOffsetIncrement}
          />
        </group>
      )),
    [layerColors, quality]
  );

  const isMobile = quality === "mobile";

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      gl={{ alpha: true, powerPreference: "high-performance" }}
      dpr={isMobile ? [1, 1] : [1, 1.25]}
      frameloop="demand"
    >
      <AdaptiveDpr pixelated />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.6} />

      {tubes}

      {!isMobile && (
        <EffectComposer>
          <Bloom
            intensity={1.8}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.05}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}

export default memo(WavyStripeComponent);
