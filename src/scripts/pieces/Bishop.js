import Piece from '../pieces/Piece';

export default class Bishop extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image = 'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
}
