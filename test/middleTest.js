// uses mocha chai
// run: npm test test/middleTest.js
const assert = require('chai').assert;
const middle = require('../middle');

//test 1
describe("#middle", () => {
  it(`Returns [3, 4] for [1, 2, 3, 4, 5, 6]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

//test 2
describe("#middle", () => {
  it(`Returns [] for []`, () => {
    assert.deepEqual(middle([]), []);
  });
});

//test 3
describe("#head", () => {
  it(`Returns [] for [1, 2,]`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

//test 4
describe("#head", () => {
  it(`Returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });
});

//test 5
describe("#head", () => {
  it(`Returns [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });
});