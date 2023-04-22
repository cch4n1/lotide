const assert = require('chai').assert;
const countLetters = require("../countLetters");

const result1 = countLetters("Lighthouse Labs");

// test 1
describe("#countLetters", () => {
  it("returns 2", () => {
    assert.strictEqual(result1.l, 2);
  });
});

// test 2
describe("#countLetters", () => {
  it("returns undefined", () => {
    assert.strictEqual(result1[" "], undefined);
  });
});

// test 3
describe("#countLetters", () => {
  it("returns undefined", () => {
    assert.strictEqual(result1.c, undefined);
  });
});

// test 4
describe("#countLetters", () => {
  it("returns 2", () => {
    assert.strictEqual(result1.s, 2);
  });
});
