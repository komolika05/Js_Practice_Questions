function countLetters(str) {
  let wordCount = {};

  for (let i = 0; i < str.length; i++) {
    const element1 = str[i];

    if (wordCount[element1]) {
      wordCount[element1] += 1;
    } else {
      wordCount[element1] = 1;
    }
  }
  return wordCount;
}

console.log(countLetters("hello"));
