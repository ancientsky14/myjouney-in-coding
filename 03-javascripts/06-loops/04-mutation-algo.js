function mutation(arr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  // Check if every character in the second string exists in the first string
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false; // if a character is missing, return false immediately
    }
  }
  return true; // all characters are found
}


console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Noel", "Ole"])); // true
