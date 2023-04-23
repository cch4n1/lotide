// uses mocha chai
// run: npm test test/findKeyTest.js
const assert = require('chai').assert;
const findKey = require('../findKey');

//Test 1
describe("#findKey", () => {
  it("returns 'noma'", () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    assert.strictEqual(findKey(obj, x => x.stars === 2), "noma");
  });
});

//Test 2
describe("#findKey", () => {
  it("returns undefined", () => {
    const obj = {
      "Harry": { age: 23 },
      "Sally": { age: 39 },
      "James": { age: 27 },
      "Edward": { age: 55 },
      "Diana": { age: 31 }
    };
    assert.strictEqual(findKey(obj, x => x.age === 99), undefined);
  });
});

//Test 3
describe("#findKey", () => {
  it("returns 'Toyota GR Supra'", () => {
    const obj = {
      "Honda Civic Type R": { hp: 315, maxspeed: 275 },
      "Toyota GR Supra": { hp: 382, maxspeed: 250 },
      "Volkswagen Golf R": { hp: 315, maxspeed: 250 },
      "Hyundai Elantra N": { hp: 315, maxspeed: 225 }
    };
    assert.strictEqual(findKey(obj, x => x.hp > 315 && x.maxspeed > 200), "Toyota GR Supra");
  });
});
