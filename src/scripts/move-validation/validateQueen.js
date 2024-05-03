export default function (piece, x2, y2, board) {
	const pieceAtDestination = board.getPieceByCoords(x2, y2)
	if (pieceAtDestination && pieceAtDestination.color !== piece.color) {
		if (x2 != 0 && y2 != 0) {
			if ((piece.x === x2 && piece.y != y2) || (piece.y === y2 && piece.x != x2) || Math.abs(piece.x - x2) === Math.abs(piece.y - y2)) {
				return true;
			}
		}
	}
}
