import Board from '../scripts/Board';

const board = new Board();

board.movePiece(board.getPieceByCoords(4, 2), 4, 4);
board.movePiece(board.getPieceByCoords(4, 7), 4, 5);
board.movePiece(board.getPieceByCoords(4, 4), 4, 5);

console.log(board.pieces);
