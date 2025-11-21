function repeatStringNumTimes(str, num) {
  // If number is less than or equal to 0, return empty string
  if (num <= 0) {
    return "";
  }

  // Initialize an empty string to store the result
  let repeatedStr = "";

  // Loop to concatenate the string 'num' times
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }

  // Return the final repeated string
  return repeatedStr;
}

// Example tests
console.log(repeatStringNumTimes("*", 4)); // "****"
console.log(repeatStringNumTimes("abc", 5)); // "abcabcabcabcabc"
console.log(repeatStringNumTimes("abc", -2)); // ""
console.log(repeatStringNumTimes("hello", 0)); // ""
console.log(repeatStringNumTimes("xyz", 5)); // "xyzxyzxyzxyzxyz"