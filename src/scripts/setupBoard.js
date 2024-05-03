import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import King from './pieces/King';
import Queen from './pieces/Queen';
import Square from './pieces/Square';

export default function setupBoard(board) {
	board.squares = [];
	board.pieces = [];
	for (let y = 1; y <= 8; y++) {
		for (let x = 1; x <= 8; x++) {
			board.squares.push(new Square(x, y));
		}
	}

	for (let square in board.squares) {
		if (board.squares[square].y === 2) {
			board.pieces.push(
				new Pawn(board.squares[square].x, board.squares[square].y, 'white', 'pawn'),
			);
		} else if (board.squares[square].y === 7) {
			board.pieces.push(
				new Pawn(board.squares[square].x, board.squares[square].y, 'black', 'pawn'),
			);
		} else if (
			(board.squares[square].y === 1 && board.squares[square].x === 1) ||
			(board.squares[square].y === 1 && board.squares[square].x === 8)
		) {
			board.pieces.push(
				new Rook(board.squares[square].x, board.squares[square].y, 'white', 'rook'),
			);
		} else if (
			(board.squares[square].y === 8 && board.squares[square].x === 1) ||
			(board.squares[square].y === 8 && board.squares[square].x === 8)
		) {
			board.pieces.push(
				new Rook(board.squares[square].x, board.squares[square].y, 'black', 'rook'),
			);
		} else if (
			(board.squares[square].y === 1 && board.squares[square].x === 3) ||
			(board.squares[square].y === 1 && board.squares[square].x === 6)
		) {
			board.pieces.push(
				new Bishop(board.squares[square].x, board.squares[square].y, 'white', 'bishop'),
			);
		} else if (
			(board.squares[square].y === 8 && board.squares[square].x === 3) ||
			(board.squares[square].y === 8 && board.squares[square].x === 6)
		) {
			board.pieces.push(
				new Bishop(board.squares[square].x, board.squares[square].y, 'black', 'bishop'),
			);
		} else if (
			(board.squares[square].y === 1 && board.squares[square].x === 2) ||
			(board.squares[square].y === 1 && board.squares[square].x === 7)
		) {
			board.pieces.push(
				new Knight(board.squares[square].x, board.squares[square].y, 'white', 'knight'),
			);
		} else if (
			(board.squares[square].y === 8 && board.squares[square].x === 2) ||
			(board.squares[square].y === 8 && board.squares[square].x === 7)
		) {
			board.pieces.push(
				new Knight(board.squares[square].x, board.squares[square].y, 'black', 'knight'),
			);
		} else if (board.squares[square].y === 1 && board.squares[square].x === 4) {
			board.pieces.push(
				new Queen(board.squares[square].x, board.squares[square].y, 'white', 'queen'),
			);
		} else if (board.squares[square].y === 8 && board.squares[square].x === 4) {
			board.pieces.push(
				new Queen(board.squares[square].x, board.squares[square].y, 'black', 'queen'),
			);
		} else if (board.squares[square].y === 1 && board.squares[square].x === 5) {
			board.pieces.push(
				new King(board.squares[square].x, board.squares[square].y, 'white', 'king'),
			);
		} else if (board.squares[square].y === 8 && board.squares[square].x === 5) {
			board.pieces.push(
				new King(board.squares[square].x, board.squares[square].y, 'black', 'king'),
			);
		}
	}
}
