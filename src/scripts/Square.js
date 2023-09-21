class Square {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	containsPiece() {
		if (this.piece != undefined) {
			return true;
		} else {
			return false;
		}
	}
}
