function findLongestWordLength(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");
  
  // Initialize variable to track the longest length
  let longest = 0;

  // Loop through each word
  for (const word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  // Return the length of the longest word
  return longest;
}

// 🔹 Test Examples
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
