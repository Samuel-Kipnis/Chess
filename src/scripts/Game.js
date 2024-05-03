import Board from './Board';

const board = new Board();
console.log(board);

const boardEl = document.querySelector('.chessboard');
const chessboard = document.querySelector('.chessboard');

const letters = {
	1: 'a',
	2: 'b',
	3: 'c',
	4: 'd',
	5: 'e',
	6: 'f',
	7: 'g',
	8: 'h',
};

function getHTMLElement(x, y, chessboard) {
	const element = Array.from(chessboard.children).filter(child => {
		if (Number(child.dataset.x) === x && Number(child.dataset.y) === y) return true;
	})[0];
	return element;
}
function refresh() {
	chessboard.innerHTML = '';
	loadSquares(board.squares);
	loadPieces(board.pieces);
}
function loadSquares() {
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j <= 8; j++) {
			const div = document.createElement('div');
			div.dataset.x = j;
			div.dataset.y = i;
			if ((i + j) % 2 === 0) {
				div.className = 'white';
			} else {
				div.className = 'black';
			}
			chessboard.append(div);
			div.addEventListener('click', () => {
				handleBoardClick(j, i);
			});
		}
	}
}
function loadPieces(squares) {
	squares.forEach(square => {
		const piece = board.getPieceByCoords(square.x, square.y);
		const squareEl = getHTMLElement(square.x, square.y, chessboard);
		// console.log(squareEl);
		const img = document.createElement('img');
		img.src = piece.color === 'white' ? piece.imageWhite : piece.imageBlack;
		squareEl.append(img);
		img.style.width = '100%';
		img.style.height = '100%';
	});
}

let clicked = false;
let lastClickedSquare = {};
function handleBoardClick(x, y) {
	if (clicked !== true) {
		let clickedSquare = getHTMLElement(x, y, chessboard);
		lastClickedSquare = clickedSquare;
		clickedSquare.style.backgroundColor = 'red';
	}
	if (clicked !== false) {
		// console.log(lastClickedSquare);
		let color =
			(Number(lastClickedSquare.dataset.x) + Number(lastClickedSquare.dataset.y)) % 2 === 0
				? 'white'
				: 'black';
		const white = 'rgb(233, 163, 88)';
		const black = 'rgb(113, 53, 4)';
		color === 'white'
			? (lastClickedSquare.style.backgroundColor = black)
			: (lastClickedSquare.style.backgroundColor = white);

		const piece = board.getPieceByCoords(
			Number(lastClickedSquare.dataset.x),
			Number(lastClickedSquare.dataset.y),
		);
		board.movePiece(piece, x, y);
		lastClickedSquare = {};
	}
	clicked = !clicked;
	refresh();
}

loadSquares(board.squares);
loadPieces(board.pieces);
