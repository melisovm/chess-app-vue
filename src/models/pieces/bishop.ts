import type { Cell } from '../cell'
import { Color } from '../colors'

import blackLogo from '../../assets/image/pieces/bishop-black.svg'
import whiteLogo from '../../assets/image/pieces/bishop-white.svg'

import { Piece, PieceType } from './index'

export class Bishop extends Piece {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.WHITE ? whiteLogo : blackLogo
    this.name = PieceType.bishop
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false
    if (this.cell.isEmptyDiagonal(target))
      return true

    return false
  }
}
