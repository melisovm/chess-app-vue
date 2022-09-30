export enum PieceKind {
  white = 'white',
  black = 'black',
}

export interface PiecePosition {
  column: number
  row: number
}

export enum PieceType {
  bishop = 'bishop',
  king = 'king',
  knight = 'knight',
  pawn = 'pawn',
  queen = 'queen',
  rook = 'rook',
}

export interface Piece {
  type: PieceType
  kind: PieceKind
  position: PiecePosition
}
