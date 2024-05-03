import Piece from '../pieces/Piece';

export default class Bishop extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.imageBlack = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png';
		this.imageWhite = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png';
	}
}
