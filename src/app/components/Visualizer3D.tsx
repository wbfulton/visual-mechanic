"use client";

import {
  AccumulativeShadows,
  Bvh,
  Environment,
  Lightformer,
  Loader,
  OrbitControls,
  PerformanceMonitor,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Outline, Selection } from "@react-three/postprocessing";
import { Color, Depth, LayerMaterial } from "lamina";
import { Suspense, useRef, useState } from "react";
import { BackSide, Group } from "three";
import { LandCruiser } from "./100-lc";
import { LCTooltip } from "./LCTooltip";
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

// 7. Move model to mesh model for post-processing selection

export const Visualizer3D = () => {
  const [selectedPartNumber, setSelectedPartNumber] = useState<string | undefined>();
  const [hoveredPartNumber, setHoveredPartNumber] = useState<string | undefined>();
  const [degraded, degrade] = useState<boolean>(false);

  if (typeof document === undefined || typeof window === undefined) return;

  const scale = window.devicePixelRatio ?? 1; // Change to 1 on retina screens to see blurry canvas.

  return (
    <LCTooltip hoveredPartNumber={hoveredPartNumber}>
      <Loader />
      <PartNumberSidePanel
        selectedPartNumber={selectedPartNumber}
        setSelectedPartNumber={setSelectedPartNumber}
      />
      <Suspense fallback={null}>
        <Canvas
          shadows
          gl={{ antialias: true, pixelRatio: scale }}
          camera={{
            position: [20, 15, 40],
            fov: 70,
            near: 1,
            far: 400,
          }}>
          {/** PerfMon will detect performance issues */}
          <PerformanceMonitor onDecline={() => degrade(true)} />
          <axesHelper args={[30]} />
          <spotLight
            position={[0, 30, 0]}
            angle={0.3}
            penumbra={1}
            castShadow
            intensity={2}
            shadow-bias={-0.0001}
          />
          <spotLight
            position={[0, 0, 30]}
            angle={0.3}
            penumbra={1}
            castShadow
            intensity={20}
            shadow-bias={-0.0001}
          />
          <ambientLight intensity={0.5} />
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
                  hoveredPartNumber={hoveredPartNumber}
                  setHoveredPartNumber={setHoveredPartNumber}
                />
              </EffectComposer>
            </Selection>
          </Bvh>
          <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
            <RandomizedLight amount={8} radius={10} ambient={0.5} position={[20, 30, -20]} />
          </AccumulativeShadows>
          {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]} labelColor="white" />
            </GizmoHelper> */}
          /{/* </Stage> */}
          {/* Renders contents "live" into a HDRI environment (scene.environment). */}
          <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
            <Lightformers />
          </Environment>
          <OrbitControls makeDefault />
        </Canvas>
      </Suspense>
    </LCTooltip>
  );
};

function Lightformers({ positions = [20, 0, 20, 0, 20, 0, 20, 0] }) {
  const group = useRef<Group>(new Group());
  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.z += delta * 10;
      if (group.current.position.z > 20) {
        group.current.position.z = -60;
      }
    }
  });
  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 20, -20]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-50, 10, -10]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer rotation-y={Math.PI / 2} position={[-15, -10, -10]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[15, 15, 0]} scale={[20, 1, 1]} />

      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={BackSide}>
          <Color color="#eee8dd" alpha={1} mode="normal" />
          <Depth
            colorA="#eee8dd"
            colorB="#eee8dd"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}
