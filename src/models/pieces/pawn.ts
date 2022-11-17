import { Color } from '../colors'
import type { Cell } from '../cell'
import whiteLogo from '../../assets/image/pieces/pawn-white.svg'
import blackLogo from '../../assets/image/pieces/pawn-black.svg'
import { Piece, PieceType } from './index'

export class Pawn extends Piece {
  isFirstStep = true

  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.WHITE ? whiteLogo : blackLogo
    this.name = PieceType.pawn
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false

    const direction = this.cell.piece?.color === Color.BLACK ? 1 : -1
    const firstStepDirection = this.cell.piece?.color === Color.BLACK ? 2 : -2
    if ((((target.y === this.cell.y + direction)
      || (this.isFirstStep
        && (target.y === this.cell.y + firstStepDirection)))
      && target.x === this.cell.x
      && this.cell.board.getCell(target.x, target.y).isEmpty()))
      return true

    if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1
        || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target))
      return true
    return false
  }

  movePiece(target: Cell) {
    super.movePiece(target)

    this.isFirstStep = false
  }
}
