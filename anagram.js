//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function anagram(s, t) {
  const arr1 = s.toLowerCase().split("").sort().join("");
  const arr2 = t.toLowerCase().split("").sort().join("");

  return arr1 === arr2;
}

const s = "Yash";
const t = "Sayh";

console.log(anagram(s, t));
