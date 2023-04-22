// uses mocha chai
// run: npm test test/tailTest.js
const assert = require('chai').assert;
const tail = require('../tail');

//test 1
describe("#tail", () => {
  it(`Returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

//test 2
describe("#tail", () => {
  it(`Returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

//test 3
describe("#tail", () => {
  it(`Returns [] for ["burger"]`, () => {
    assert.deepEqual(tail(["burger"]), []);
  });
});

//test 4
describe("#tail", () => {
  it(`Returns [] for []`, () => {
    assert.deepEqual(tail([]), []);
  });
});
