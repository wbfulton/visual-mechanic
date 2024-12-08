"use client"


import { BakeShadows, Bvh, CameraControls, ContactShadows, Environment } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { EffectComposer, N8AO, Outline, Selection, TiltShift2, ToneMapping } from '@react-three/postprocessing'
import { Suspense } from 'react'
import { InstancedModel } from './Model'

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0.5, 1], fov: 50, near: 0.001 }} onCreated={(state) => (state.gl.shadowMap.autoUpdate = false)}>
      <ambientLight intensity={2} />
      <spotLight position={[0, 5, 0]} angle={10} penumbra={1} intensity={2} castShadow shadow-mapSize={2048} />
      <spotLight position={[0, 10, -10]} intensity={2} angle={0.04} penumbra={2} castShadow shadow-mapSize={1024} />
      <Suspense fallback={null}>
        <Bvh firstHitOnly>
          <Selection>
            <Effects />
            <InstancedModel limit={50} position={[0, -0.0005, 0]} castShadow receiveShadow />
          </Selection>
        </Bvh>
      </Suspense>
      <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.4, 0]} far={1} width={1.5} height={1.5} blur={0.2} />
      <Environment background preset='warehouse' />
      <BakeShadows />
      <CameraControls />
    </Canvas>
  )
}

function Effects() {
  const { size } = useThree()
  // useFrame((state, delta) => {
  //   easing.damp3(state.camera.position, [state.pointer.x, 1 + state.pointer.y / 2, 8 + Math.atan(state.pointer.x * 2)], 0.3, delta)
  //   state.camera.lookAt(state.camera.position.x * 0.9, 0, -4)
  // })
  return (
    <EffectComposer stencilBuffer autoClear={false} multisampling={4}>
      <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
      <Outline visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} blur width={size.width * 1.25} edgeStrength={10} />
      <TiltShift2 samples={5} blur={0.1} />
      <ToneMapping />
    </EffectComposer>
  )
}
