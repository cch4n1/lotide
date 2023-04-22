// uses mocha chai
// run: npm test test/takeUntilTest.js
const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

// Test 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

describe("#takeUntil", () => {
  it(`returns [ 1, 2, 5, 7, 2 ]`, () => {
    assert.deepEqual(results1,[ 1, 2, 5, 7, 2 ]);
  });
});

// Test 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it(`returns [ "I've", 'been', 'to', 'Hollywood' ]`, () => {
    assert.deepEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);
  });
});

// Test 3
const data3 = ['coke', 'sprite', 'pepsi', '7-up', 'root beer', 'diet coke', 'orange crush', 'ginger ale'];
const results3 = takeUntil(data3, x => x.length >= 8);

describe("#takeUntil", () => {
  it(`returns [ 'coke', 'sprite', 'pepsi', '7-up' ]`, () => {
    assert.deepEqual(results3,[ 'coke', 'sprite', 'pepsi', '7-up' ]);
  });
});