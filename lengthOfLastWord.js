// Given a string s consisting of words and spaces, return the length of the last word in the string.

function lastWord(sentence) {
  const arr = sentence.split(" ");
  const word = arr[arr.length - 1];
  return lengthOfLastWord(word);
}

function lengthOfLastWord(word) {
  const arr = word.split("");
  let count = 0;
  for (let i of arr) {
    count += 1;
  }
  return count;
}

console.log(lastWord("My name is yashika"));
