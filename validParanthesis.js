//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function isValidParanthesis(s) {
  const stack = [];
  const openingBracket = ["(", "[", "{"];
  const closingBracket = [")", "]", "}"];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (openingBracket.includes(currentBracket)) {
      stack.push(currentBracket);
    } else {
      const lastOpeningBracket = stack.pop();

      if (
        !lastOpeningBracket ||
        openingBracket.indexOf(lastOpeningBracket) !==
          closingBracket.indexOf(currentBracket)
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const s = "[]";
console.log(isValidParanthesis(s));
