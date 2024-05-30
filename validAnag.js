//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function validAnagram(s, t) {
  const arr1 = s.split("");
  const arr2 = t.split("");
  let count = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const element1 = arr1[i];
  }
  return false;
}

console.log(validAnagram("anagram", "nagram"));
