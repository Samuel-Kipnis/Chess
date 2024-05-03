import Piece from './Piece';

export default class Knight extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.imageBlack = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png';
		this.imageWhite = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png';
	}
}
