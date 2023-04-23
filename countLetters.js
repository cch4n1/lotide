//Takes in a string and returns an object that keeps track of number of times each letter appears in the string.
const countLetters = function (lettersToCount) {
  const parseWord = lettersToCount.toLowerCase().split("")
   // Convert the string to lowercase and split it into an array of characters "parseWord"
  const results = {}
  // Create an empty object "results" that will store the letter counts
  for (const letter of parseWord) {
    if (letter !== " ") {
      // Check if letter is not a space
      if (results[letter]) {
        results[letter] += 1;
        // If letter is key in "results" object, increment by 1
      } else {
        results[letter] = 1;
        // If letter is not key in "results" object, add as new key with a value of 1
      }
    }
  }

  return results;
}

module.exports = countLetters;