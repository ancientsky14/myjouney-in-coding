function fearNotLetter(str) {
  // Normalize case to handle both uppercase and lowercase consistently
  let lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length - 1; i++) {
    let currentCode = lowerStr.charCodeAt(i);
    let nextCode = lowerStr.charCodeAt(i + 1);

    // Detect missing letter
    if (nextCode - currentCode > 1) {
      let missingChar = String.fromCharCode(currentCode + 1);

      // Preserve original case (if input was uppercase)
      return str === str.toUpperCase()
        ? missingChar.toUpperCase()
        : missingChar;
    }
  }

  return undefined;
}

//  Test Cases
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("bcdf")); // "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

//  Additional uppercase tests
console.log(fearNotLetter("ABCE")); // "D"
console.log(fearNotLetter("RSTVWX")); // "U"
