function squarePattern(value) {
  for (j = 0; j <= value; j++) {
    let row = "";
    for (let i = 0; i <= value; i++) {
      if (i == j || i == value - j) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

squarePattern(6);
