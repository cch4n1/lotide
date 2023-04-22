// uses mocha chai
// run: npm test test/withoutTest.js
const assert = require('chai').assert;
const without = require('../without');

//This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source that
//are not present in the itemsToRemove array.


//test 1
describe("#without", () => {
  it("returns [2, 3] without [1] of [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]),[2, 3]);
  });
});

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

//test 2
describe("#without", () => {
  it(`returns ["1", "2"] without [1, 2, "3"] of ["1", "2", "3"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});

//test 3
describe("#without", () => {
  it(`returns [2, 3], [2, 3] without  of `, () => {
    assert.deepEqual(without([2, 6, 3], [6]), [2, 3]);
  });
});

//test 2
describe("#without", () => {
  it(`returns [] without [1, 2, 3, 4, 5] of [1, 2, 3, 4, 5]`, () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), []);
  });
});
