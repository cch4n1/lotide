//Compares two objects and gives a pass or fail message depending on if there is a match
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ?
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    // Use `eqObjects` on `actual` and `expected`, and see if they match.
  console.log(`Example label: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;