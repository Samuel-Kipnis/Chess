import { v4 as uuidv4 } from 'uuid';

export default class Piece {
	constructor(x, y, color, type) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.color = color;
		this.id = uuidv4();
	}
	setCoordinates(x, y) {
		this.x = x;
		this.y = y;
	}
}
