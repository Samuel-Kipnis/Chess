export default function (piece, x2, y2, board) {
	const pieceAtDestination = board.getPieceByCoords(x2, y2)
	if (pieceAtDestination && pieceAtDestination.color !== piece.color) {
		if (x2 != 0 && y2 != 0) {
			if (
				(piece.y + 2 === y2 && piece.x + 1 === x2) ||
				(piece.y + 2 === y2 && piece.x - 1 === x2) ||
				(piece.y - 2 === y2 && piece.x + 1 === x2) ||
				(piece.y - 2 === y2 && piece.x - 1 === x2) ||
				(piece.y + 1 === y2 && piece.x + 2 === x2) ||
				(piece.y + 1 === y2 && piece.x - 2 === x2) ||
				(piece.y - 1 === y2 && piece.x + 2 === x2) ||
				(piece.y - 1 === y2 && piece.x - 2 === x2)
			) {
				return true;
			}
		}
	}
}
