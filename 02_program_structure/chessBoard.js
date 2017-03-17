var board = "";
var size = 8;

for (var row = 0; row < size; row++) {
  for (var col = 0; col < size; col++) {
    if ((row + col) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);