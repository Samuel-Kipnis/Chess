import Square from './Square';

class Piece {
	constructor(x, y, color, type) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.color = color;
	}
	setCoordinates(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Pawn extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image =
			'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
	validMove(x, y) {
		if (this.color === 'white') {
			if (this.y === 2) {
				if ((this.x === x && this.y === y - 1) || (this.x === x && this.y === y - 2)) {
					return true;
				}
			}
			if (this.x === x && this.y === y - 1) {
				return true;
			}
		}
		if (this.color === 'black') {
			if (this.y === 7) {
				if ((this.x === x && this.y === y + 1) || (this.x === x && this.y === y + 2)) {
					return true;
				}
			}
			if (this.x === x && this.y === y + 1) {
				return true;
			}
		}
	}
}

class Rook extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image =
			'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
	validMove(x, y) {
		if (x != 0 && y != 0) {
			if ((this.x === x && this.y != y) || (this.y === y && this.x != x)) {
				return true;
			}
		}
	}
}

class Bishop extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image =
			'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
	validMove(x, y) {
		if (x != 0 && y != 0) {
			if (Math.abs(this.x - x) === Math.abs(this.y - y)) {
				return true;
			}
		}
	}
}

class Knight extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image =
			'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
	validMove(x, y) {
		if (x != 0 && y != 0) {
			if (
				(this.y + 2 === y && this.x + 1 === x) ||
				(this.y + 2 === y && this.x - 1 === x) ||
				(this.y - 2 === y && this.x + 1 === x) ||
				(this.y - 2 === y && this.x - 1 === x) ||
				(this.y + 1 === y && this.x + 2 === x) ||
				(this.y + 1 === y && this.x - 2 === x) ||
				(this.y - 1 === y && this.x + 2 === x) ||
				(this.y - 1 === y && this.x - 2 === x)
			) {
				return true;
			}
		}
	}
}

class Queen extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image =
			'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
	validMove(x, y) {
		if (x != 0 && y != 0) {
			if (
				(this.x === x && this.y != y) ||
				(this.y === y && this.x != x) ||
				Math.abs(this.x - x) === Math.abs(this.y - y)
			) {
				return true;
			}
		}
	}
}

class King extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image =
			'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
	validMove(x, y) {
		if (x != 0 && y != 0) {
			if (
				(this.x === x && this.y != y && Math.abs(this.x - x) === 1) ||
				Math.abs(this.y - y) === 1 ||
				(this.y === y && this.x != x && Math.abs(this.x - x) === 1) ||
				Math.abs(this.y - y) === 1 ||
				(Math.abs(this.x - x) === Math.abs(this.y - y) && Math.abs(this.x - x) === 1) ||
				Math.abs(this.y - y) === 1
			) {
				return true;
			}
		}
	}
}

class Board {
	constructor() {
		this.squares = [];
		this.pieces = [];
		for (let y = 1; y <= 8; y++) {
			for (let x = 1; x <= 8; x++) {
				this.squares.push(new Square(x, y));
			}
		}

		for (let square in this.squares) {
			if (this.squares[square].y === 2) {
				this.pieces.push(
					new Pawn(this.squares[square].x, this.squares[square].y, 'white', 'pawn'),
				);
			} else if (this.squares[square].y === 7) {
				this.pieces.push(
					new Pawn(this.squares[square].x, this.squares[square].y, 'black', 'pawn'),
				);
			} else if (
				(this.squares[square].y === 1 && this.squares[square].x === 1) ||
				(this.squares[square].y === 1 && this.squares[square].x === 8)
			) {
				this.pieces.push(
					new Rook(this.squares[square].x, this.squares[square].y, 'white', 'rook'),
				);
			} else if (
				(this.squares[square].y === 8 && this.squares[square].x === 1) ||
				(this.squares[square].y === 8 && this.squares[square].x === 8)
			) {
				this.pieces.push(
					new Rook(this.squares[square].x, this.squares[square].y, 'black', 'rook'),
				);
			} else if (
				(this.squares[square].y === 1 && this.squares[square].x === 3) ||
				(this.squares[square].y === 1 && this.squares[square].x === 6)
			) {
				this.pieces.push(
					new Bishop(this.squares[square].x, this.squares[square].y, 'white', 'bishop'),
				);
			} else if (
				(this.squares[square].y === 8 && this.squares[square].x === 3) ||
				(this.squares[square].y === 8 && this.squares[square].x === 6)
			) {
				this.pieces.push(
					new Bishop(this.squares[square].x, this.squares[square].y, 'black', 'bishop'),
				);
			} else if (
				(this.squares[square].y === 1 && this.squares[square].x === 2) ||
				(this.squares[square].y === 1 && this.squares[square].x === 7)
			) {
				this.pieces.push(
					new Knight(this.squares[square].x, this.squares[square].y, 'white', 'knight'),
				);
			} else if (
				(this.squares[square].y === 8 && this.squares[square].x === 2) ||
				(this.squares[square].y === 8 && this.squares[square].x === 7)
			) {
				this.pieces.push(
					new Knight(this.squares[square].x, this.squares[square].y, 'black', 'knight'),
				);
			} else if (this.squares[square].y === 1 && this.squares[square].x === 5) {
				this.pieces.push(
					new Queen(this.squares[square].x, this.squares[square].y, 'white', 'queen'),
				);
			} else if (this.squares[square].y === 8 && this.squares[square].x === 5) {
				this.pieces.push(
					new Queen(this.squares[square].x, this.squares[square].y, 'black', 'queen'),
				);
			} else if (this.squares[square].y === 1 && this.squares[square].x === 4) {
				this.pieces.push(
					new King(this.squares[square].x, this.squares[square].y, 'white', 'king'),
				);
			} else if (this.squares[square].y === 8 && this.squares[square].x === 4) {
				this.pieces.push(
					new King(this.squares[square].x, this.squares[square].y, 'black', 'king'),
				);
			}
		}
	}
	getPieceByCoords(x, y) {
		for (let piece in this.pieces) {
			if (this.pieces[piece].x === x && this.pieces[piece].y === y) {
				return piece;
			} else {
				return undefined;
			}
		}
	}
	movePiece(x, y, piece) {
		console.log('move attempted');
		if (piece.validMove(x, y)) {
			piece.setCoordinates(x, y);
			this.calcuateCaptures(x, y, piece);
			console.log('move successful');
		}
	}
	calcuateCaptures(x, y, movedPiece) {
		for (let piece in this.pieces) {
			if (this.pieces[piece] != movedPiece) {
				console.log('not piece that moved');
				if (this.pieces[piece].x === x && this.pieces[piece].y === y) {
					console.log('captured piece');
					this.removePiece(this.pieces[piece]);
				}
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
}

const board = new Board();

for (let piece in board.pieces) {
	if (board.pieces[piece].type === 'king') {
		board.movePiece(4, 2, board.pieces[piece]);
		break;
	}
}

console.log(board.pieces);
