export default class Piece {
	constructor(x, y, color, type) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.color = color;
	}
	setCoordinates(x, y) {
		this.x = x;
		this.y = y;
	}
}
