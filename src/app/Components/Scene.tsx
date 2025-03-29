"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/lungs.glb"); 
  console.log(scene);
  return <primitive object={scene} position={[2.5,-3.8,4]} scale={[3,3,3]}/>;
}

export default function Scene() {
  return (
    <Canvas style={{ height: "40vh",  }}>
      <Suspense>
        <Model />
      </Suspense>
      <OrbitControls target={[-0.2,0.7,4]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
    </Canvas>
  );
}
