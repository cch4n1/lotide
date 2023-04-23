// Compares two values (actual, expected) and displays a series of success / failure messages printed to the console based on a matching or non-matching outcomes.
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;