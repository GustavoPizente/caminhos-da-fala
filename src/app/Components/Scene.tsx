// src/components/Scene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      {/* Controle de Câmera */}
      <OrbitControls />
      {/* Luz */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      {/* Cubo 3D */}
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="hotpink" />
      </Box>
    </Canvas>
  );
}
