<script setup lang="ts">
import type { PropType } from 'vue'
import type { PiecePosition } from '../../models/pieces'

defineProps({
  color: {
    type: String,
    default: 'white',
    validator(value) {
      return ['white', 'black'].includes(value as string)
    },
  },
  size: {
    type: String,
    default: '72px',
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: Object as PropType<PiecePosition>,
    required: true,
  },
})
</script>

<template>
  <div class="cell" :class="color === 'white' ? 'bg-board-white' : 'bg-board-black'">
    <!--    c{{ position.column }} r{{ position.row }} -->
    <slot />
  </div>
</template>

<style scoped lang="scss">
.cell {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
