//Write a function to calculate factorial of a number. The function should not accept invalid inputs and should throw respective error message.

const output = {};

function factorial(n) {
  if (output[n]) {
    console.log("Picked from memory--------------------", n, ":", output[n]);
    return output[n];
  }
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("Invalid Input");
  }

  if (n == 0 || n == 1) {
    return 1;
  }

  const res = n * factorial(n - 1);
  output[n] = res;
  return res;
}

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// [4, 5]
function arrFactorial(arr) {
  const results = [];
  for (const i of arr) {
    if (output[i]) {
      console.log("Picked from memory-------------------", i, ":", output[i]);
      results.push(output[i]);
    } else {
      try {
        const result = factorial(i);
        results.push(result);
        output[i] = result;
      } catch (error) {
        results.push(-1);
        output[i] = -1;
      }
    }
  }
  return results;
}
const arr = [1, 3, null, 5, 50, 51];
console.log(arrFactorial(arr));

// pass the calculated factorials with its input into an object, then check for further values
//if the input already exist in the object or not, if it does it returns the already calculated factorial,
//if not it calculates the factorial and pass it to the object.

/*
Recursive Functions => is a function which calls itself again and again. 

function x(n) {
  console.log("HI")
  if (n < 10) {
    x(n++)
  }
}

x(1)
*/
