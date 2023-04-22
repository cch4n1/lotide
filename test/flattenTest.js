// uses mocha chai
// run: npm test test/flattenTest.js
const assert = require('chai').assert;
const flatten = require('../flatten');

//test 1
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
  });
});

//test 2
describe("#flatten", () => {
  it(`returns ["1", 2, "3", 4, 5, 6] for [["1"], [2], ["3"], [4], [5], [6]]`, () => {
    assert.deepEqual(flatten([["1"], [2], ["3"], [4], [5], [6]]),["1", 2, "3", 4, 5, 6]);
  });
});

//test 3
describe("#flatten", () => {
  it(`returns [] for []`, () => {
    assert.deepEqual(flatten([[]]),[]);
  });
});

//test 4
describe("#flatten", () => {
  it(`returns ["hello"] for ["hello"]`, () => {
    assert.deepEqual(flatten([["hello"]]),["hello"]);
  });
});