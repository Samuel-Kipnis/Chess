export default function (x1, y1, x2, y2, color, board) {
	if (color === 'white') {
		const squares = [];
		if (y1 === 2) {
			squares.push({ x: x1 + 1, y: y1 + 1 }, { x: x1 + 2, y: y1 + 2 });
			let validMove = true;
			for (let square in squares) {
				if (squares[square].x === x2 && squares[square].y === y2) {
					validMove = false;
				}
			}

			if (validMove) {
				if ((x1 === x2 && y1 === y2 - 1) || (x1 === x2 && y1 === y2 - 2)) return true;
			}
		}
		squares.push({ x: x1 + 1, y: y1 + 1 });
		let validMove = true;
		for (let square in squares) {
			if (squares[square].x === x2 && squares[square].y === y2) {
				validMove = false;
			}
		}

		if (x1 === x2 && y1 === y2 - 1) return true;
	}
	if (color === 'black') {
		const squares = [];
		if (y1 === 7) {
			squares.push({ x: x1 - 1, y: y1 - 1 }, { x: x1 - 2, y: y1 - 2 });
			let validMove = true;
			for (let square in squares) {
				if (squares[square].x === x2 && squares[square].y === y2) {
					validMove = false;
				}
			}

			if (validMove) {
				if ((x1 === x2 && y1 === y2 + 1) || (x1 === x2 && y1 === y2 + 2)) return true;
			}
		}

		squares.push({ x: x1 - 1, y: y1 - 1 });
		let validMove = true;
		for (let square in squares) {
			if (squares[square].x === x2 && squares[square].y === y2) {
				validMove = false;
			}
		}

		if (validMove) {
			if (x1 === x2 && y1 === y2 + 1) return true;
		}
	}
}
