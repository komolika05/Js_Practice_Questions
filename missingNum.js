function missingNum(num) {
  const arr = [];
  for (let i = 0; i < num.length + 1; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      return arr[i];
    }
  }
}

console.log(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));
