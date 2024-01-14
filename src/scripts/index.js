import Board from '../scripts/Board';

const board = new Board();

board.removePiece(board.getPieceByCoords(1, 2));
board.movePiece(board.getPieceByCoords(1, 1), 1, 8);

console.log(board.pieces);
