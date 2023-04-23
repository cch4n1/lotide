// uses mocha chai
// run: npm test test/findKeyByValueTest.js
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Tests
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//test 1
describe("#findKeyByValue", () => {
  it(`returns 'drama' for: bestTVShowsByGenre, 'The Wire'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});

//test 2
describe("#findKeyByValue", () => {
  it(`returns undefined for: bestTVShowsByGenre, 'That '70s Show'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});