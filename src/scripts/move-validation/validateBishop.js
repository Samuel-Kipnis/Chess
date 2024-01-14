export default function (x1, y1, x2, y2, color, board) {
	// const squares = [];

	// let i = 1;
	// while (x1 + i <= 8 && y1 + i <= 8) {
	// 	if (!board.getPieceByCoords(x1 + i, y1 + i)) {
	// 		squares.push({ x: x1 + i, y: y1 + i });
	// 		i++;
	// 	} else {
	// 		console.log(board.getPieceByCoords(x1 + i, y1 + i), ' interrupted move');
	// 		break;
	// 	}
	// }
	// i = 1;

	// while (x1 - i >= 1 && y1 - i >= 1) {
	// 	console.log(x1 - i, y1 - i);
	// 	if (!board.getPieceByCoords(x1 - i, y1 - i)) {
	// 		squares.push({ x: x1 - i, y: y1 - i });
	// 		i--;
	// 	} else {
	// 		console.log(board.getPieceByCoords(x1 - i, y1 - i), ' interrupted move');
	// 		break;
	// 	}
	// }
	// i = 1;

	// while (x1 + i <= 8 && y1 - i > 0) {
	// 	if (!board.getPieceByCoords(x1 + i, y1 - i)) {
	// 		squares.push({ x: x1 + i, y: y1 - i });
	// 		i++;
	// 	} else {
	// 		console.log(board.getPieceByCoords(x1 + i, y1 - i), ' interrupted move');
	// 		break;
	// 	}
	// }
	// i = 1;

	// while (x1 - i > 0 && y1 + i <= 8) {
	// 	if (!board.getPieceByCoords(x1 - i, y1 + i)) {
	// 		squares.push({ x: x1 - i, y: y1 + i });
	// 		i--;
	// 	} else {
	// 		console.log(board.getPieceByCoords(x1 - i, y1 + i), ' interrupted move');
	// 		break;
	// 	}
	// }

	// console.log(squares);

	// let validMove = true;
	// for (let square in squares) {
	// 	if (squares[square].x === x2 && squares[square].y === y2) {
	// 		validMove = false;
	// 	}
	// }

	// if (validMove) {
	if (x2 != 0 && y2 != 0) {
		if (Math.abs(x1 - x2) === Math.abs(x1 - y2)) {
			return true;
		}
	}
	// }
}
