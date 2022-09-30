<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { ABaseCell, ABasePiece } from '../index'
import { usePiecesStore } from '../../store/pieces'

const columns = ref([1, 2, 3, 4, 5, 6, 7, 8])
const rows = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])

const piecesStore = usePiecesStore()

onBeforeMount(() => {
})

const pieceInCell = (column: number, row: number) => piecesStore
  .getAllPieces
  .find(({ position }) => position.column === column && position.row === row)
</script>

<template>
  <div class="w-full h-full items-center justify-center flex">
    <div class="table">
      <div v-for="(row, rowIndex) in rows.reverse()" :key="row">
        <div v-for="(column, columnIndex) in columns.reverse()" :key="column" class="relative">
          <ABaseCell
            v-if="row && column"
            :name="`${row}${column}`"
            :position="{ column: columnIndex, row: rowIndex }"
            :color="(columnIndex + rowIndex) % 2 === 0 ? 'white' : 'black'"
          >
            <template v-if="pieceInCell(columnIndex, rowIndex)">
              <ABasePiece
                :kind="pieceInCell(columnIndex, rowIndex).kind"
                :type="pieceInCell(columnIndex, rowIndex).type"
              />
            </template>
          </ABaseCell>

          <div
            v-if="columnIndex === columns.length - 1"
            class="absolute bottom-1 right-1.5"
            :class="(columnIndex + rowIndex) % 2 === 0 ? 'text-board-black' : 'text-board-white'"
          >
            {{ row }}
          </div>

          <div
            v-if="rowIndex === 0"
            class="absolute left-1.5 top-1 text-board-white"
            :class="(columnIndex + rowIndex) % 2 === 0 ? 'text-board-black' : 'text-board-white'"
          >
            {{ column }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table {
  width: 600px;
  height: 600px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
