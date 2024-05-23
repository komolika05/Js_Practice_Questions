function sidePattern(value) {
  for (let j = 0; j <= value; j++) {
    let row = " ";
    for (let i = 0; i <= j; i++) {
      row += "*";
    }
    console.log(row);
  }

  for (let j = value; j >= 0; j--) {
    let row = " ";
    for (let i = 0; i <= j; i++) {
      row += "*";
    }
    console.log(row);
  }
}

sidePattern(5);
