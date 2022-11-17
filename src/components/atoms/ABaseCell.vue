<script setup lang="ts">
import type { PropType, UnwrapRef } from 'vue'
import { computed } from 'vue'
import type { Cell } from '../../models/cell'
import { useBoardStore } from '../../store/board'
import { usePlayerStore } from '../../store/player'

const props = defineProps({
  cell: {
    type: Object as PropType<UnwrapRef<Cell>>,
    required: true,
  },
  size: {
    type: String,
    default: '72px',
  },
})

defineEmits(['click'])

const boardStore = useBoardStore()
const playerStore = usePlayerStore()

const selected = computed(() => props.cell.x === boardStore.selectedCell?.x && props.cell.y === boardStore.selectedCell?.y)

const selectCell = () => {
  if (boardStore.selectedCell
    && !Object.is(boardStore.selectedCell, props.cell)
    && boardStore.selectedCell?.piece?.canMove(props.cell as Cell)) {
    boardStore.selectedCell.movePiece(props.cell as Cell)

    playerStore.swapPlayer()
    boardStore.setSelectedCell(null)
  }
  else {
    if (playerStore.getCurrentPlayer && playerStore.getCurrentPlayer.color === props.cell.piece?.color)
      boardStore.setSelectedCell(props.cell as Cell)
  }
}
</script>

<template>
  <div
    class="cell -rotate-90"
    :class="[
      cell.color === 'white' ? 'bg-board-white' : 'bg-board-black',
      { 'bg-board-selected': selected },
      { 'bg-board-attackable': cell.available && cell.piece },
    ]"
    @click="selectCell"
  >
    <div v-if="!cell.piece && cell.available" class="available bg-board-selected" />
    <div v-if="cell.piece?.logo">
      <img :src="cell.piece.logo" alt="">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cell {
  width: v-bind(size);
  height: v-bind(size);
  position: relative;

  .available {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2);
    top: calc(50% - 24px/2);
    border-radius: 50%;
  }
}
</style>
