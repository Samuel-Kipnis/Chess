export default function (x1, y1, x2, y2, color, board) {
	if (color === 'white') {
		if (y1 === 2) {
			if ((x1 === x2 && y1 === y2 - 1) || (x1 === x2 && y1 === y2 - 2)) return true;
		} else if (x1 === x2 && y1 === y2 - 1) return true;
	}
	if (color === 'black') {
		if (y1 === 7) {
			if ((x1 === x2 && y1 === y2 + 1) || (x1 === x2 && y1 === y2 + 2)) return true;
		} else if (x1 === x2 && y1 === y2 + 1) return true;
	}
}
