import { Color } from '../colors'
import type { Cell } from '../cell'
import whiteLogo from '../../assets/image/pieces/queen-white.svg'
import blackLogo from '../../assets/image/pieces/queen-black.svg'
import { Piece, PieceType } from './index'

export class Queen extends Piece {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.WHITE ? whiteLogo : blackLogo
    this.name = PieceType.queen
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false
    if (this.cell.isEmptyVertical(target))
      return true
    if (this.cell.isEmptyHorizontal(target))
      return true

    if (this.cell.isEmptyDiagonal(target))
      return true

    return false
  }
}
