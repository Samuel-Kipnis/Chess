import Piece from './Piece';

export default class Pawn extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.imageBlack = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png';
		this.imageWhite = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png';
	}
}
