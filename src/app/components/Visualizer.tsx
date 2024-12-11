"use client";

import {
  Bvh,
  ContactShadows,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Loader,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { LandCruiser } from "./100-lc";

export default function App() {
  const scale = window?.devicePixelRatio ?? 1; // Change to 1 on retina screens to see blurry canvas.
  const { gridSize, ...gridConfig } = useControls({
    gridSize: [600, 600],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 0, min: 0, max: 5, step: 0.1 },
    cellColor: "#f4f0e8",
    sectionSize: { value: 10, min: 1, max: 100, step: 10 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: "#9d4b4b",
    fadeDistance: { value: 80, min: 0, max: 2000, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: false,
  });
  return (
    <>
      <Loader />
      <Canvas
        shadows
        gl={{ antialias: true, pixelRatio: scale }}
        camera={{ position: [40, 40, 70], fov: 100, near: 0.3, far: 2000, zoom: 3 }}>
        <Perf />
        <axesHelper args={[30]} />
        <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
        <Stage intensity={0.5} shadows="contact" environment="city">
          <Suspense fallback={null}>
            <Bvh firstHitOnly>
              <LandCruiser position={[-0.055, 0, 0.15]} />
            </Bvh>
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]} labelColor="white" />
            </GizmoHelper>
          </Suspense>
        </Stage>

        <ContactShadows
          frames={1}
          rotation-x={[Math.PI / 2]}
          position={[0, -0.4, 0]}
          far={1}
          width={1.5}
          height={1.5}
          blur={0.2}
        />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}
