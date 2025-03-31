"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/WhiteLungs.glb"); 
  console.log(scene);
  return <primitive object={scene} position={[2.7,-4.2,3.1]} scale={[3,3,3]}/>;
}

export default function Scene() {
  return (
    <Canvas style={{ height: "40vh", width: '90%', background: 'linear-gradient(rgb(164, 204, 214),rgba(109,184,163)'}}>
      <Suspense>
        <Model />
      </Suspense>
      <OrbitControls target={[0,0,4]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
    </Canvas>
  );
}
