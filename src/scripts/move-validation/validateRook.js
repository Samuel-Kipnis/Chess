export default function (x1, y1, x2, y2) {
	if (x2 != 0 && y2 != 0) {
		if ((x1 === x2 && y1 != y2) || (y1 === y2 && x1 != x2)) {
			return true;
		}
	}
}
