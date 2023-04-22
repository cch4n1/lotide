const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it(`returns { Fang: 2, Jason: 1 } for { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    assert.deepEqual(result1,{ Fang: 2, Jason: 1 });
  });
});