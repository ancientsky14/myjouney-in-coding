/**
 * Counts the number of vowels in a given sentence.
 */
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

/**
 * Counts the number of consonants in a given sentence.
 */
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) count++;
  }
  return count;
}

/**
 * Counts punctuation marks in a sentence.
 * (Anything that's not a letter or space)
 */
function getPunctuationCount(sentence) {
  let count = 0;
  for (const char of sentence) {
    if (!/[a-zA-Z\s]/.test(char)) count++;
  }
  return count;
}

/**
 * Counts words in a sentence.
 */
function getWordCount(sentence) {
  const trimmed = sentence.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

/**
 * Unified analyzer that prints all stats for a given sentence.
 */
function analyzeSentence(sentence) {
  console.log(`Analyzing: "${sentence}"`);
  console.log(`Vowel Count: ${getVowelCount(sentence)}`);
  console.log(`Consonant Count: ${getConsonantCount(sentence)}`);
  console.log(`Punctuation Count: ${getPunctuationCount(sentence)}`);
  console.log(`Word Count: ${getWordCount(sentence)}`);
  console.log("=====================================");
}

// 🔹 Test Runs
analyzeSentence("Apples are tasty fruits.");
analyzeSentence("Coding is awesome!");
analyzeSentence("WHAT?!?!?!?!?");
analyzeSentence("I love Jee Anne N. Gabuyo");
