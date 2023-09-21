export default function (x1, y1, x2, y2) {
	if (x2 != 0 && y2 != 0) {
		if (
			(x1 === x2 && y1 != y2 && Math.abs(x1 - x2) === 1) ||
			Math.abs(y1 - y2) === 1 ||
			(y1 === y2 && x1 != x2 && Math.abs(x1 - x2) === 1) ||
			Math.abs(y1 - y2) === 1 ||
			(Math.abs(x1 - x2) === Math.abs(y1 - y2) && Math.abs(x1 - x2) === 1) ||
			Math.abs(y1 - y2) === 1
		) {
			return true;
		}
	}
}
