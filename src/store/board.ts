import { defineStore } from 'pinia'
import { Board } from '../models/board'
import type { Cell } from '../models/cell'
import { Color } from '../models/colors'

interface BoardState {
  board: Board
  selectedCell: Cell | null
}

export const useBoardStore = defineStore('board', {
  state: (): BoardState => ({
    board: new Board(),
    selectedCell: null,
  }),

  getters: {
    getBoard: state => state.board,

    getLostPieces: state => (color: Color) => color === Color.WHITE
      ? state.board.lostWhitePieces
      : state.board.lostBlackPieces,
  },

  actions: {
    setSelectedCell(cell: Cell | null) {
      this.selectedCell = cell

      this.highlightCells()
    },

    highlightCells() {
      this.board.highlightCells(this.selectedCell as Cell)

      this.board = this.board.getCopyBoard()
    },
  },
})
