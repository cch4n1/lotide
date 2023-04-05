const assertEqual = function (actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
};

// start countLetters function

const countLetters = function (lettersToCount) {
  const parseWord = lettersToCount.toLowerCase().split("")
  const results = {}

  for (const letter of parseWord) {
    // console.log(letter);
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

console.log(countLetters("Lighthouse Labs"))

const result1 = countLetters("Lighthouse Labs");

assertEqual(result1.l, 2)
assertEqual(result1[" "], undefined)
assertEqual(result1.c, undefined)
assertEqual(result1.s, 2)