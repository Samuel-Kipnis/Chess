import Piece from './Piece';

export default class King extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.imageBlack = 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png';
		this.imageWhite = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png';
	}
}
