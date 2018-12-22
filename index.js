var chessBoard = [
	[
  	"wR",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bR",
  ], // a
  [
    "wKn",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bKn",
  ], // b
  [
    "wB",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bB",
  ], // c
  [
    "wQ",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bQ",
  ], // d
  [
    "wK",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bK",
  ], // e
  [
    "wB",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bB",
  ], // f
  [
    "wKn",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bKn",
  ], // g
  [
  	"wR",
    "wP",
    "",
    "",
    "",
    "",
    "bP",
    "bR",
  ], // h
];

var letters = [
	'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h'
];

for (var column = 0; column < chessBoard.length; column++) {
	for (var row = 0; row < chessBoard[column].length; row++) {
  	var squareEl = document.getElementById(letters[column] + (row + 1));
  	squareEl.innerHTML = chessBoard[column][row];
  }
}

document.getElementById('moveButton').addEventListener('click', function(event) {
	event.preventDefault();
  var fromCell = document.getElementById('from');
  var toCell = document.getElementById('to');
  console.log(fromCell.value);
  console.log(toCell.value);
});
