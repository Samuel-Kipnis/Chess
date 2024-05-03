export default function (piece, x2, y2, board) {
	let noInterruptions = true;

	if ((piece.color = 'white')) {
		for (let x = piece.x + 1; x < x2; x++) {
			if (board.getPieceByCoords(piece.y, x)) {
				console.log(board.getPieceByCoords(piece.y, x));
				noInterruptions = false;
			}
		}
	}

	if ((piece.color = 'black')) {
		for (let y = piece.y - 1; y < y2; y++) {
			if (board.getPieceByCoords(piece.x, y)) {
				noInterruptions = false;
			}
		}
	}

	const pieceAtDestination = board.getPieceByCoords(x2, y2);
	if (!pieceAtDestination) {
		if (noInterruptions) {
			if (piece.color === 'white') {
				if (piece.y === 2) {
					if (
						(piece.x === x2 && piece.y === y2 - 1) ||
						(piece.x === x2 && piece.y === y2 - 2)
					)
						return true;
				} else if (piece.x === x2 && piece.y === y2 - 1) return true;
			}
			if (piece.color === 'black') {
				if (piece.y === 7) {
					if (
						(piece.x === x2 && piece.y === y2 + 1) ||
						(piece.x === x2 && piece.y === y2 + 2)
					)
						return true;
				} else if (piece.x === x2 && piece.y === y2 + 1) return true;
			}
		}
	}
}
