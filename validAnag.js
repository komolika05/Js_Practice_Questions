//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function validAnagram(s, t) {
  let count1 = {};
  let count2 = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const element1 = s[i];

    if (count1[element1]) {
      count1[element1] += 1;
    } else {
      count1[element1] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const element2 = t[i];

    if (count2[element2]) {
      count2[element2] += 1;
    } else {
      count2[element2] = 1;
    }
  }
  return compareObjects(count1, count2);
}

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("rat", "car"));
