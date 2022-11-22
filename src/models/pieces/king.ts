import { Color } from '../colors'
import type { Cell } from '../cell'
import whiteLogo from '../../assets/image/pieces/king-white.svg'
import blackLogo from '../../assets/image/pieces/king-black.svg'
import { Piece, PieceType } from './index'

export class King extends Piece {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.WHITE ? whiteLogo : blackLogo
    this.name = PieceType.king
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false

    const canMove = ((target.y - this.cell.y) ** 2) + ((target.x - this.cell.x) ** 2) <= 2

    if (canMove) {
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          const selectedPiece = this.cell.board.cells[i][j].piece
          if (!selectedPiece || selectedPiece.color === this.color)
            continue

          return !selectedPiece.canMove(target)
        }
      }
    }

    return canMove
  }
}
