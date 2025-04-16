"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Model() {
  const { scene } = useGLTF("/WhiteLungs.glb");
  return (
    <primitive object={scene} position={[2.7, -4.2, 3.1]} scale={[3, 3, 3]} />
  );
}

export default function Scene() {
  const [controlsEnabled, setControlsEnabled] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setControlsEnabled(true);
    };

    window.addEventListener("click", handleClick, { once: true });

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Canvas
      style={{
        height: "40vh",
        width: "90%",
        background: "linear-gradient(rgb(164, 204, 214), rgba(109, 184, 163))",
      }}
    >
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <OrbitControls enabled={controlsEnabled} target={[0, 0, 4]} />
    </Canvas>
  );
}
