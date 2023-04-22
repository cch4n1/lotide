// uses mocha chai
// run: npm test test/mapTest.js
const map = require('../map');
const assert = require('chai').assert;

// test 1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

describe("#map", () => {
  it(`returns [ 'g', 'c', 't', 'm', 't' ] for word[0] of ["ground", "control", "to", "major", "tom"]`, () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
});

// test 2
const newArr = [1, 2, 3, 4]
const results2 = map(newArr, newArr => newArr);

describe("#map", () => {
  it(`returns [1, 2, 3, 4] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(results2, [1, 2, 3, 4]);
  });
});