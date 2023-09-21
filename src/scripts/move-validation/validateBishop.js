export default function (x1, y1, x2, y2) {
	if (x2 != 0 && y2 != 0) {
		if (Math.abs(x1 - x2) === Math.abs(x1 - y2)) {
			return true;
		}
	}
}
