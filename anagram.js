//Given two strings s and t, return true if t is an anagram of s, and false otherwise

function anagram(s, t) {
  const arr1 = s.split("").sort();
  const arr2 = t.split("").sort();

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const s = "yash";
const t = "sayh";

console.log(anagram(s, t));
