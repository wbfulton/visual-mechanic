"use client";

import {
  Bvh,
  ContactShadows,
  GizmoHelper,
  GizmoViewport,
  Loader,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { LandCruiser } from "./100-lc";
import { PartNumberSidePanel } from "./PartNumberSidePanel";

// 1. Need to have part numbers

// 2. Need to have map lookup of data
// 3. Start with local cache, but use fast.api after

// 4. Model needs to be fixed to be accurate.
//    a. Bumper
//    b. Body
//    c. Front Lights
//    d. Door step up bar

// Need to fix tooltip

export const Visualizer3D = () => {
  const scale = window?.devicePixelRatio ?? 1; // Change to 1 on retina screens to see blurry canvas.
  const [selectedPartNumber, setSelectedPartNumber] = useState<string | undefined>();

  return (
    <>
      <Loader />
      <PartNumberSidePanel
        selectedPartNumber={selectedPartNumber}
        setSelectedPartNumber={setSelectedPartNumber}
      />
      <Canvas
        shadows
        gl={{ antialias: true, pixelRatio: scale }}
        camera={{ position: [40, 40, 70], fov: 100, near: 0.5, far: 2000, zoom: 3 }}>
        <Perf />
        <axesHelper args={[200]} />
        <Stage intensity={0.5} shadows="contact" environment="city">
          <Suspense fallback={null}>
            <Bvh firstHitOnly>
              <LandCruiser
                position={[-0.055, 0, 0.15]}
                selectedPartNumber={selectedPartNumber}
                setSelectedPartNumber={setSelectedPartNumber}
              />
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
};
