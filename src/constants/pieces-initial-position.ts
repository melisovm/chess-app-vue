import type { Piece } from '../models/pieces'
import { PieceKind, PieceType } from '../models/pieces'

const allPiecesByKind = (kind: PieceKind): Omit<Piece, 'kind'>[] => {
  const column = kind === PieceKind.white ? 7 : 0

  const pawns: Omit<Piece, 'kind'>[] = Array(8)
    .fill({ type: PieceType.pawn }, 0, 8)
    .map(({ type }, index) => (
      {
        type,
        position: {
          column: kind === PieceKind.white ? 6 : 1,
          row: index,
        },
      }))

  return [
    ...pawns,

    {
      type: PieceType.rook,
      position: {
        column,
        row: 0,
      },
    },
    {
      type: PieceType.rook,
      position: {
        column,
        row: 7,
      },
    },
    {
      type: PieceType.bishop,
      position: {
        column,
        row: 2,
      },
    },
    {
      type: PieceType.bishop,
      position: {
        column,
        row: 5,
      },
    },
    {
      type: PieceType.knight,
      position: {
        column,
        row: 1,
      },
    },
    {
      type: PieceType.knight,
      position: {
        column,
        row: 6,
      },
    },
    {
      type: PieceType.queen,
      position: {
        column,
        row: 3,
      },
    },
    {
      type: PieceType.king,
      position: {
        column,
        row: 4,
      },
    },
  ]
}

const GET_WHITE_PIECES = (): Piece[] => {
  return [...allPiecesByKind(PieceKind.white)]
    .map(piece => ({ ...piece, kind: PieceKind.white }))
}

const GET_BLACK_PIECES = (): Piece[] => {
  return [...allPiecesByKind(PieceKind.black)]
    .map(piece => ({ ...piece, kind: PieceKind.black }))
}

export const BLACK_PIECES = GET_BLACK_PIECES()
export const WHITE_PIECES = GET_WHITE_PIECES()

export default {
  black: BLACK_PIECES,
  white: WHITE_PIECES,
}
