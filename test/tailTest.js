const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it(`Returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

describe("#tail", () => {
  it(`Returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

describe("#tail", () => {
  it(`Returns [] for ["burger"]`, () => {
    assert.deepEqual(tail(["burger"]), []);
  });
});

describe("#tail", () => {
  it(`Returns [] for []`, () => {
    assert.deepEqual(tail([]), []);
  });
});
