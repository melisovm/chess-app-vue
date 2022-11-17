import { Color } from '../colors'
import type { Cell } from '../cell'
import whiteLogo from '../../assets/image/pieces/knight-white.svg'
import blackLogo from '../../assets/image/pieces/knight-black.svg'
import { Piece, PieceType } from './index'

export class Knight extends Piece {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.WHITE ? whiteLogo : blackLogo
    this.name = PieceType.knight
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false

    const dx = Math.abs(target.x - this.cell.x)
    const dy = Math.abs(target.y - this.cell.y)

    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2)
  }
}
