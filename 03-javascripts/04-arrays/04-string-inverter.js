/**
 * Reverses the characters in a given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 * 
 * Example:
//  * reverseString("hello"); //olleh
 */
function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  return str.split("").reverse().join("");
}
console.log(reverseString("hello"))

console.log(reverseString("sapnu puas"))

