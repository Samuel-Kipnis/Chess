export default function (piece, x2, y2, board) {
	// const squares = [];
	let noInterruptions = true

	for (let x = piece.x + 1; x < x2; x++) {
		if (!board.getPieceByCoords(x, piece.y)) {
			squares.push({ x, y: piece.y });
		} else {
			noInterruptions = false
			break
		}
	}
	for (let y = piece.y + 1; y < y2; y++) {
		if (!board.getPieceByCoords(piece.x, y)) {
			squares.push({ x: piece.x, y });
		} else {
			noInterruptions = false
			break
		}
	}

	const pieceAtDestination = board.getPieceByCoords(x2, y2)
	if (pieceAtDestination && pieceAtDestination.color !== piece.color) {
		if (noInterruptions) {
			if (x2 != 0 && y2 != 0) {
				if ((piece.x === x2 && piece.y != y2) || (piece.y === y2 && piece.x != x2)) {
					return true;
				}
			}
		}
	}
}
