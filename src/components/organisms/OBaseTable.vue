<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useBoardStore } from '../../store/board'
import { ABaseCell, MBaseLostPieces } from '../index'
import { usePlayerStore } from '../../store/player'
import { Color } from '../../models/colors'

const boardStore = useBoardStore()
const playerStore = usePlayerStore()

onBeforeMount(() => {
  boardStore.board.initCells()
  boardStore.board.addFigures()
  playerStore.setCurrentPlayer(Color.WHITE)
})
</script>

<template>
  <div class="w-full h-full ">
    <div class="text-center my-20">
      Current turn for {{ playerStore.getCurrentPlayer.color }}
    </div>

    <div class="items-center justify-center flex">
      <MBaseLostPieces class="mr-5" :pieces="boardStore.board.lostWhitePieces" title="White color lost pieces" />

      <div class="board flex flex-wrap-reverse items-center justify-center rotate-90">
        <div v-for="(row, index) in boardStore.board.cells" :key="index">
          <div v-for="(cell) in row" :key="cell.id">
            <ABaseCell
              :color="cell.color"
              :cell="cell"
            />
          </div>
        </div>
      </div>

      <MBaseLostPieces class="ml-5" :pieces="boardStore.board.lostBlackPieces" title="Black color lost pieces" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.board {
  width: 600px;
  height: 600px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
