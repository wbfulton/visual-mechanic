"use client";

import { Bvh, ContactShadows, Loader, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Outline, Selection } from "@react-three/postprocessing";
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

// 5. Need to fix tooltip

// 6. Redesign Navbar

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
        {/* <Perf /> */}
        <axesHelper args={[200]} />
        <Stage intensity={0.5} shadows="contact" environment="city">
          <Suspense fallback={null}>
            <Bvh firstHitOnly>
              <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                  {/* <SelectiveBloom
                    kernelSize={KernelSize.HUGE}
                    luminanceThreshold={0}
                    luminanceSmoothing={0}
                    intensity={0.5}
                  />
                  <SelectiveBloom
                    kernelSize={3}
                    luminanceThreshold={0}
                    luminanceSmoothing={0.4}
                    intensity={0.6}
                  /> */}

                  <Outline
                    pulseSpeed={0.5}
                    blur
                    xRay
                    visibleEdgeColor={0xff0000}
                    hiddenEdgeColor={0xff0000}
                    edgeStrength={200}
                    // width={500}
                  />
                  <LandCruiser
                    position={[-11.15, 0, 25]}
                    selectedPartNumber={selectedPartNumber}
                    setSelectedPartNumber={setSelectedPartNumber}
                  />
                </EffectComposer>
              </Selection>
            </Bvh>
            {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]} labelColor="white" />
            </GizmoHelper> */}
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
