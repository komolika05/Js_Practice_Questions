function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    const digits = num.toString().split("");

    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i], 10);
    }
    num = sum;
  }

  return num;
}

console.log(addDigits(38));
