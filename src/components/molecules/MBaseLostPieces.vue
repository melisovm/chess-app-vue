<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Piece } from '../../models/pieces'

defineProps({
  pieces: {
    type: Array as PropType<Piece[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="rounded-lg self-stretch p-4 w-[250px] bg-white lost-pieces">
    <div class="font-bold underline mb-5">
      {{ title }}
    </div>

    <div class="flex flex-wrap">
      <div v-for="piece in pieces" :key="piece.cell">
        <img :src="piece.logo" :alt="piece.name">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lost-pieces {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

