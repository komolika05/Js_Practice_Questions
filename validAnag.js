//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function validAnagram(s, t) {
  let count = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const element1 = s[i];

    if (count[element1]) {
      count[element1] += 1;
    } else {
      count[element1] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const element2 = t[i];

    if (!count[element2]) {
      return false;
    } else {
      count[element2] -= 1;
    }
  }

  for (let key in count) {
    if (count[key] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
