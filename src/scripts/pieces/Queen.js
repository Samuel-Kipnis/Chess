import Piece from './Piece';

export default class Queen extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.imageBlack = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png';
		this.imageWhite = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png';
	}
}
