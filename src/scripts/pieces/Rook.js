import Piece from './Piece';

export default class Rook extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.imageBlack = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png';
		this.imageWhite = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png';
	}
}
