import type { Color } from '../colors'
import type bishopBlack from '../../assets/image/pieces/bishop-black.svg'
import type { Cell } from '../cell'

export enum PieceType {
  piece = 'piece',
  bishop = 'bishop',
  king = 'king',
  knight = 'knight',
  pawn = 'pawn',
  queen = 'queen',
  rook = 'rook',
}

export class Piece {
  color: Color
  logo: typeof bishopBlack | null
  cell: Cell
  name: PieceType
  id: number

  constructor(color: Color, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.piece = this
    this.logo = null
    this.name = PieceType.piece
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if (target.piece?.color === this.color)
      return false
    if (target.piece?.name === PieceType.king)
      return false
    return true
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  movePiece(target: Cell) {
  }
}

export enum PieceKind {
  white = 'white',
  black = 'black',
}

export interface PiecePosition {
  column: number
  row: number
}
