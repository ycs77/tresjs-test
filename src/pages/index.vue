<template>
  <TresCanvas
    clear-color="#82DBC5"
    shadows
    window-size
    :shadow-map="BasicShadowMap"
    :output-color-space="SRGBColorSpace"
    :tone-mapping="NoToneMapping"
  >
    <!-- 鏡頭 -->
    <TresPerspectiveCamera
      :position="[0, 2, 6]"
      :look-at="[0, 0, 0]"
    />
    <OrbitControls />

    <!-- 坐標軸視覺輔助 -->
    <!-- <TresAxesHelper :args="[5]" /> -->

    <!-- 藍方塊 -->
    <TresMesh
      :position="[-2, 0.75, 0]"
      cast-shadow
    >
      <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
      <TresMeshToonMaterial color="#2244ff" />
    </TresMesh>
    <!-- 橘方塊 -->
    <TresMesh
      :position="[box.position.x, box.position.y, box.position.z]"
      :rotation="[
        box.rotation.x / 180 * Math.PI,
        box.rotation.y / 180 * Math.PI,
        box.rotation.z / 180 * Math.PI,
      ]"
      cast-shadow
    >
      <TresBoxGeometry :args="[box.width, box.height, box.depth]" />
      <TresMeshToonMaterial color="#ff4400" />
    </TresMesh>
    <!-- 紅方塊 -->
    <TresMesh
      :position="[2, 0.75, 0]"
      cast-shadow
    >
      <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
      <TresMeshToonMaterial color="#ff2244" />
    </TresMesh>
    <!-- 綠圓球 -->
    <TresMesh
      :position="[4, 0.75, 0]"
      cast-shadow
    >
      <TresSphereGeometry :args="[0.75, 32, 32]" />
      <TresMeshToonMaterial color="#44dd22" />
    </TresMesh>

    <!-- 地板 -->
    <TresMesh
      :position="[0, 0, 0]"
      :rotation="[-Math.PI / 2, 0, 0]"
      receive-shadow
    >
      <TresPlaneGeometry :args="[30, 30]" />
      <TresMeshToonMaterial color="#D3FC8A" />
    </TresMesh>

    <!-- 光 -->
    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight
      :position="[0, 2, 4]"
      :intensity="2"
      cast-shadow
    />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'
import { Pane } from 'tweakpane'

const box = reactive({
  width: 1.5,
  height: 1.5,
  depth: 1.5,
  position: { x: 0, y: 1.25, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
})

let pane: Pane

onMounted(() => {
  pane = new Pane()
  pane.addBinding(box, 'width', { min: 0, max: 5, step: 0.25 })
  pane.addBinding(box, 'height', { min: 0, max: 5, step: 0.25 })
  pane.addBinding(box, 'depth', { min: 0, max: 5, step: 0.25 })
  pane.addBinding(box, 'position', {
    x: { min: -5, max: 5, step: 0.25 },
    y: { min: -5, max: 5, step: 0.25 },
    z: { min: -5, max: 5, step: 0.25 },
  })
  pane.addBinding(box, 'rotation', {
    x: { min: -180, max: 180, step: 1 },
    y: { min: -180, max: 180, step: 1 },
    z: { min: -180, max: 180, step: 1 },
  })
})

onBeforeUnmount(() => {
  pane.dispose()
})
</script>

<style>
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
}
</style>
