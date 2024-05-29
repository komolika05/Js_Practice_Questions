//Given two strings s and t, determine if they are isomorphic.

function isomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sObj = {};
  for (let i = 0; i < s.length; i++) {
    const elementS = s[i];
    const elementT = t[i];

    if (sObj[elementS]) {
      if (sObj[elementS] !== elementT) {
        return false;
      }
    } else {
      if (Object.values(sObj).includes(elementT)) {
        return false;
      }
      sObj[elementS] = elementT;
    }
    console.log(sObj);
  }
  return true;
}

console.log(isomorphic("egg", "add"));
