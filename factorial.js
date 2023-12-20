//Write a function to calculate factorial of a number. The function should not accept invalid inputs and should throw respective error message.

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    throw new Error("Invalid Input");
  }

  if (n == 0 || n == 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(6));
