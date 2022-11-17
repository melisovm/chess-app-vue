import { Color } from '../colors'
import type { Cell } from '../cell'
import whiteLogo from '../../assets/image/pieces/rook-white.svg'
import blackLogo from '../../assets/image/pieces/rook-black.svg'
import { Piece, PieceType } from './index'

export class Rook extends Piece {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.WHITE ? whiteLogo : blackLogo
    this.name = PieceType.rook
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false

    if (this.cell.isEmptyVertical(target))
      return true

    if (this.cell.isEmptyHorizontal(target))
      return true
    return false
  }
}
