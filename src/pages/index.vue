<template>
  <TresCanvas
    clear-color="#82DBC5"
    window-size
  >
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <TresMesh
      :position="[0, 0, 0]"
      cast-shadow
    >
      <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
      <TresMeshBasicMaterial color="#ff4400" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>
