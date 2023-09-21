import validateBishop from './move-validation/validateBishop';
import validateKing from './move-validation/validateKing';
import validateKnight from './move-validation/validateKnight';
import validatePawn from './move-validation/validatePawn';
import validateQueen from './move-validation/validateQueen';
import validateRook from './move-validation/validateRook';

import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import King from './pieces/King';
import Queen from './pieces/Queen';

class Square {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

export default class Board {
	squares = [];
	pieces = [];
	constructor() {
		for (let y = 1; y <= 8; y++) {
			for (let x = 1; x <= 8; x++) {
				this.squares.push(new Square(x, y));
			}
		}

		for (let square in this.squares) {
			if (this.squares[square].y === 2) {
				this.pieces.push(new Pawn(this.squares[square].x, this.squares[square].y, 'white', 'pawn'));
			} else if (this.squares[square].y === 7) {
				this.pieces.push(new Pawn(this.squares[square].x, this.squares[square].y, 'black', 'pawn'));
			} else if (
				(this.squares[square].y === 1 && this.squares[square].x === 1) ||
				(this.squares[square].y === 1 && this.squares[square].x === 8)
			) {
				this.pieces.push(new Rook(this.squares[square].x, this.squares[square].y, 'white', 'rook'));
			} else if (
				(this.squares[square].y === 8 && this.squares[square].x === 1) ||
				(this.squares[square].y === 8 && this.squares[square].x === 8)
			) {
				this.pieces.push(new Rook(this.squares[square].x, this.squares[square].y, 'black', 'rook'));
			} else if (
				(this.squares[square].y === 1 && this.squares[square].x === 3) ||
				(this.squares[square].y === 1 && this.squares[square].x === 6)
			) {
				this.pieces.push(new Bishop(this.squares[square].x, this.squares[square].y, 'white', 'bishop'));
			} else if (
				(this.squares[square].y === 8 && this.squares[square].x === 3) ||
				(this.squares[square].y === 8 && this.squares[square].x === 6)
			) {
				this.pieces.push(new Bishop(this.squares[square].x, this.squares[square].y, 'black', 'bishop'));
			} else if (
				(this.squares[square].y === 1 && this.squares[square].x === 2) ||
				(this.squares[square].y === 1 && this.squares[square].x === 7)
			) {
				this.pieces.push(new Knight(this.squares[square].x, this.squares[square].y, 'white', 'knight'));
			} else if (
				(this.squares[square].y === 8 && this.squares[square].x === 2) ||
				(this.squares[square].y === 8 && this.squares[square].x === 7)
			) {
				this.pieces.push(new Knight(this.squares[square].x, this.squares[square].y, 'black', 'knight'));
			} else if (this.squares[square].y === 1 && this.squares[square].x === 5) {
				this.pieces.push(new Queen(this.squares[square].x, this.squares[square].y, 'white', 'queen'));
			} else if (this.squares[square].y === 8 && this.squares[square].x === 5) {
				this.pieces.push(new Queen(this.squares[square].x, this.squares[square].y, 'black', 'queen'));
			} else if (this.squares[square].y === 1 && this.squares[square].x === 4) {
				this.pieces.push(new King(this.squares[square].x, this.squares[square].y, 'white', 'king'));
			} else if (this.squares[square].y === 8 && this.squares[square].x === 4) {
				this.pieces.push(new King(this.squares[square].x, this.squares[square].y, 'black', 'king'));
			}
		}
	}
	getPieceByCoords(x, y) {
		for (let piece in this.pieces) {
			if (this.pieces[piece].x === x && this.pieces[piece].y === y) {
				return this.pieces[piece];
			}
		}
	}
	movePiece(piece, x, y) {
		console.log('move attempted');
		if (this.isValidMove(piece.x, piece.y, x, y, piece.type, piece.color)) {
			piece.setCoordinates(x, y);
			this.calcuateCaptures(x, y, piece);
			console.log('move successful');
		}
	}
	calcuateCaptures(x, y, movedPiece) {
		if (movedPiece.type != 'pawn') {
			const pieceAtCoords = this.getPieceByCoords(x, y, movedPiece);
			if (pieceAtCoords) {
				console.log('captured piece');
			}
		}
	}
	removePiece(pieceToRemove) {
		for (let piece in this.pieces) {
			if (this.pieces[piece] === pieceToRemove) {
				this.pieces.splice(piece, 1);
			}
		}
	}
	isValidMove(x1, y1, x2, y2, type, color) {
		if (type === 'pawn' && validatePawn(x1, y1, x2, y2, color, this)) return true;
		if (type === 'rook' && validateRook(x1, y1, x2, y2)) return true;
		if (type === 'knight' && validateKnight(x1, y1, x2, y2)) return true;
		if (type === 'bishop' && validateBishop(x1, y1, x2, y2)) return true;
		if (type === 'king' && validateKing(x1, y1, x2, y2)) return true;
		if (type === 'queen' && validateQueen(x1, y1, x2, y2)) return true;
	}
}
