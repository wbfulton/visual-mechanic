"use client";

import { Bvh, Loader, OrbitControls, PerformanceMonitor, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Outline, Selection, Vignette } from "@react-three/postprocessing";
import { Suspense, useState } from "react";
import { PartNumberSidePanel } from "../components/PartNumberSidePanel";
import { VisualizerTooltip } from "../components/VisualizerTooltip";
import { LandCruiser } from "./100-lc";

export const Visualizer3D = () => {
  const [selectedPartNumber, setSelectedPartNumber] = useState<string | undefined>();
  const [hoveredPartNumber, setHoveredPartNumber] = useState<string | undefined>();
  const [dpr, setDpr] = useState<number>(2);

  return (
    <VisualizerTooltip hoveredPartNumber={hoveredPartNumber}>
      <Loader />
      <PartNumberSidePanel
        selectedPartNumber={selectedPartNumber}
        setSelectedPartNumber={setSelectedPartNumber}
      />
      <Suspense fallback={null}>
        <Canvas
          dpr={dpr}
          shadows
          gl={{ antialias: true }}
          camera={{
            position: [2.5, 0.5, 3.5],
            fov: 60,
            near: 0.1,
            far: 400,
          }}>
          {/** PerfMon will detect performance issues */}
          <PerformanceMonitor onIncline={() => setDpr(2.5)} onDecline={() => setDpr(1)} />
          {/* <Stats className="!left-0 !top-0" showPanel={0} />
          <Stats className="!left-20 !top-0" showPanel={2} /> */}
          {/* <axesHelper args={[30]} /> */}
          <color attach="background" args={["#C4BEB4"]} />
          <ambientLight intensity={0.5} />
          <Bvh>
            <Selection>
              <EffectComposer multisampling={8} autoClear={false}>
                <Outline
                  blur
                  xRay={false}
                  visibleEdgeColor={0xffffff} // 0xeb0a1e}
                  hiddenEdgeColor={0x22090a}
                  edgeStrength={2}
                />
                <Vignette eskil={false} offset={0.1} darkness={0.5} />

                <Stage shadows={false} preset="rembrandt">
                  <LandCruiser
                    position={[-1.25, 0, 3]}
                    scale={0.1}
                    selectedPartNumber={selectedPartNumber}
                    setSelectedPartNumber={setSelectedPartNumber}
                    hoveredPartNumber={hoveredPartNumber}
                    setHoveredPartNumber={setHoveredPartNumber}
                  />
                </Stage>
              </EffectComposer>
            </Selection>
          </Bvh>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </VisualizerTooltip>
  );
};
