import { Cell } from './cell'
import type { Piece } from './pieces'
import { Color } from './colors'
import { Queen } from './pieces/queen'
import { Pawn } from './pieces/pawn'
import { King } from './pieces/king'
import { Bishop } from './pieces/bishop'
import { Knight } from './pieces/knight'
import { Rook } from './pieces/rook'

export class Board {
  cells: Cell[][] = []
  lostBlackPieces: Piece[] = []
  lostWhitePieces: Piece[] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0)
          row.push(new Cell(this, j, i, Color.BLACK, null)) // Черные ячейки
        else
          row.push(new Cell(this, j, i, Color.WHITE, null)) // белые
      }
      this.cells.push(row)
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board()
    newBoard.cells = this.cells
    newBoard.lostWhitePieces = this.lostWhitePieces
    newBoard.lostBlackPieces = this.lostBlackPieces
    return newBoard
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j]
        target.available = !!selectedCell?.piece?.canMove(target)
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Color.BLACK, this.getCell(i, 1))
      new Pawn(Color.WHITE, this.getCell(i, 6))
    }
  }

  private addKings() {
    new King(Color.BLACK, this.getCell(3, 0))
    new King(Color.WHITE, this.getCell(3, 7))
  }

  private addQueens() {
    new Queen(Color.BLACK, this.getCell(4, 0))
    new Queen(Color.WHITE, this.getCell(4, 7))
  }

  private addBishops() {
    new Bishop(Color.BLACK, this.getCell(2, 0))
    new Bishop(Color.BLACK, this.getCell(5, 0))
    new Bishop(Color.WHITE, this.getCell(2, 7))
    new Bishop(Color.WHITE, this.getCell(5, 7))
  }

  private addKnights() {
    new Knight(Color.BLACK, this.getCell(1, 0))
    new Knight(Color.BLACK, this.getCell(6, 0))
    new Knight(Color.WHITE, this.getCell(1, 7))
    new Knight(Color.WHITE, this.getCell(6, 7))
  }

  private addRooks() {
    new Rook(Color.BLACK, this.getCell(0, 0))
    new Rook(Color.BLACK, this.getCell(7, 0))
    new Rook(Color.WHITE, this.getCell(0, 7))
    new Rook(Color.WHITE, this.getCell(7, 7))
  }

  public addFigures() {
    this.addPawns()
    this.addKnights()
    this.addKings()
    this.addBishops()
    this.addQueens()
    this.addRooks()
  }
}
