import Board from '../scripts/Board';

const board = new Board();

// board.movePiece(6, 2, board.getPieceByCoords(4, 2));
const pawn1 = board.getPieceByCoords(1, 2);
board.movePiece(pawn1, 1, 4);
console.log(pawn1);

const pawn2 = board.getPieceByCoords(2, 7);
board.movePiece(pawn2, 2, 5);
console.log(pawn2);

board.movePiece(pawn1, 2, 5);
console.log(pawn1);

console.log(board.pieces);
