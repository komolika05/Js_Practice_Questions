//Write a function to calculate factorial of a number. The function should not accept invalid inputs and should throw respective error message.

function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
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

function arrFactorial(arr) {
  const results = [];
  for (const i of arr) {
    try {
      results.push(factorial(i));
    } catch (error) {
      results.push(-1);
    }
  }
  return results;
}
const arr = [1, 3, null, 5];
console.log(arrFactorial(arr));
