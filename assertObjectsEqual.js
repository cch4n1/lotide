//Compares two objects and gives a pass or fail message depending on if there is a match
const eqObjects = require("./eqObjects");
//takes in 2 objects: acutal and expected
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Use `eqObjects` on `actual` and `expected`, and see if they match.
  eqObjects(actual, expected) ?
  // display pass or fail message for each result
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  console.log(`Example label: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;