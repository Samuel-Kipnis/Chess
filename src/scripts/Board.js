import validateBishop from './move-validation/validateBishop';
import validateKing from './move-validation/validateKing';
import validateKnight from './move-validation/validateKnight';
import validatePawn from './move-validation/validatePawn';
import validateQueen from './move-validation/validateQueen';
import validateRook from './move-validation/validateRook';

import setupBoard from './setupBoard';

export default class Board {
	constructor() {
		setupBoard(this);
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
		if (this.isValidMove(piece, x, y)) {
			piece.setCoordinates(x, y);
			this.calcuateCaptures(x, y, piece);
			console.log('move successful');
		}
	}
	calcuateCaptures(x, y, movedPiece) {
		const pieceAtCoords = this.getPieceByCoords(x, y, movedPiece);
		for (let piece in this.pieces) {
			if (
				this.pieces[piece].x == pieceAtCoords.x &&
				this.pieces[piece].y == pieceAtCoords.y &&
				this.pieces[piece].id !== pieceAtCoords.id
			) {
				this.removePiece(this.pieces[piece]);
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
	isValidMove(piece, x2, y2) {
		if (piece.type === 'pawn' && validatePawn(piece, x2, y2, this)) return true;
		if (piece.type === 'rook' && validateRook(piece, x2, y2, this)) return true;
		if (piece.type === 'knight' && validateKnight(piece, x2, y2, this)) return true;
		if (piece.type === 'bishop' && validateBishop(piece, x2, y2, this)) return true;
		if (piece.type === 'king' && validateKing(piece, x2, y2, this)) return true;
		if (piece.type === 'queen' && validateQueen(piece, x2, y2, this)) return true;
		return false;
	}
}
