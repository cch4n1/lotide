const countLetters = function (lettersToCount) {
  const parseWord = lettersToCount.toLowerCase().split("")
  const results = {}

  for (const letter of parseWord) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
}

module.exports = countLetters;