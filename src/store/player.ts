import { defineStore } from 'pinia'
import { Player } from '../models/player'
import { Color } from '../models/colors'

interface PlayerState {
  currentPlayer: Player | null
}

export const usePlayerStore = defineStore('player', {
  state: (): PlayerState => ({
    currentPlayer: null,
  }),

  getters: {
    getCurrentPlayer: state => state.currentPlayer,
  },

  actions: {
    setCurrentPlayer(color: Color) {
      this.currentPlayer = new Player(color)
    },

    swapPlayer() {
      this.setCurrentPlayer(this.currentPlayer && this.currentPlayer.color === Color.WHITE ? Color.BLACK : Color.WHITE)
    },
  },
})
