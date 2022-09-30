import { defineStore } from 'pinia'
import type { Piece } from '../models/pieces'
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

  actions: {},
})
