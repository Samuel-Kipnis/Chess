export default function (x1, y1, x2, y2, color, board) {
	// const squares = [];

	// for (let x = x1 + 1; x < x2; x++) {
	// 	if (!board.getPieceByCoords(x, y1)) {
	// 		squares.push({ x, y: y1 });
	// 	} else {
	// 		console.log(board.getPieceByCoords(x, y1), ' interrupted move');
	// 		break;
	// 	}
	// }
	// for (let y = y1 + 1; y < y2; y++) {
	// 	if (!board.getPieceByCoords(x1, y)) {
	// 		squares.push({ x: x1, y });
	// 	} else {
	// 		console.log(board.getPieceByCoords(x1, y), ' interrupted move');
	// 		break;
	// 	}
	// }

	// let validMove = true;
	// for (let square in squares) {
	// 	if (board.getPieceByCoords(squares[square].x, squares[square].y)) {
	// 		validMove = false;
	// 	} else {
	// 		continue;
	// 	}
	// }

	// console.log(squares);

	// if (validMove) {
	if (x2 != 0 && y2 != 0) {
		if ((x1 === x2 && y1 != y2) || (y1 === y2 && x1 != x2)) {
			return true;
		}
	}
	// }
}
