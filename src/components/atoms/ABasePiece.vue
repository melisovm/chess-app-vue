<script setup lang="ts">
import type { PropType } from 'vue'
import type { PieceKind, PieceType } from '../../models/pieces'

const props = defineProps({
  type: {
    type: String as PropType<PieceType>,
    required: true,
  },
  kind: {
    type: String as PropType<PieceKind>,
    required: true,
  },
})

const imageSrc = new URL(`/src/assets/image/pieces/${props.type}-${props.kind}.svg`, import.meta.url).href
</script>

<template>
  <img :src="imageSrc" :alt="`${type}-${kind}`">
</template>

<style scoped lang="ts">

</style>
