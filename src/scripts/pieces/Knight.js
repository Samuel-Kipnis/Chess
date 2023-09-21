import Piece from './Piece';

export default class Knight extends Piece {
	constructor(x, y, color, type) {
		super(x, y, color, type);
		this.image = 'https://clipart-library.com/images_k/chess-piece-silhouette/chess-piece-silhouette-1.png';
	}
}
