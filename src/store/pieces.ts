import { defineStore } from 'pinia'
import type { Piece, PiecePosition } from '../models/pieces'
import PIECES from '../constants/pieces-initial-position'

export interface PiecesState {
  pieces: {
    black: Piece[]
    white: Piece[]
  }
}

export const usePiecesStore = defineStore('pieces', {
  state: (): PiecesState => ({
    pieces: { ...PIECES },
  }),

  getters: {
    getPieces: state => state.pieces,

    getAllPieces: state => ([...state.pieces.black, ...state.pieces.white]),
  },

  actions: {
    setPosition(piece: Piece, position: PiecePosition) {
      const selectedPiece = this.pieces[piece.kind]
        .find(pieceItem => pieceItem.type === piece.type
          && pieceItem.position.column === piece.position.column
          && pieceItem.position.row === piece.position.row,
        ) as Piece

      selectedPiece.position = position
    },
  },
})
