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
		if (this.isValidMove(piece.x, piece.y, x, y, piece.type, piece.color)) {
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
				console.log(this.pieces[piece]);
				this.pieces.splice(piece, 1);
			}
		}
	}
	isValidMove(x1, y1, x2, y2, type, color) {
		if (type === 'pawn' && validatePawn(x1, y1, x2, y2, color, this)) return true;
		if (type === 'rook' && validateRook(x1, y1, x2, y2, color, this)) return true;
		if (type === 'knight' && validateKnight(x1, y1, x2, y2, color, this)) return true;
		if (type === 'bishop' && validateBishop(x1, y1, x2, y2, color, this)) return true;
		if (type === 'king' && validateKing(x1, y1, x2, y2, color, this)) return true;
		if (type === 'queen' && validateQueen(x1, y1, x2, y2, color, this)) return true;
		return false;
	}
}
