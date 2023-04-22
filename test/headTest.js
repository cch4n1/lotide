const assert = require('chai').assert;
const head = require('../head');

//test 1
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

//test 2
describe("#head", () => {
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

//test 3
describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
});

//test 4
describe("#head", () => {
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

//test 5
describe("#head", () => {
  it("returns 3 for [3]", () => {
    assert.strictEqual(head([3]), 3);
  });
});

//test 6
describe("#head", () => {
  it("returns undefined for []", () => {
    assert.strictEqual(head([3]), 3);
  });
});