//assertEqual
const assertEqual = require("../assertEqual");
const findKey = require("../findKey");

//Test 1
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
const result1 = findKey(obj1, x => x.stars === 2);
assertEqual(result1, "noma"); // Expected output: ✅ Assertion Passed: noma === noma

//Test 2
const obj2 = {
  "Harry": { age: 23 },
  "Sally": { age: 39 },
  "James": { age: 27 },
  "Edward": { age: 55 },
  "Diana": { age: 31 },
};
const result2 = findKey(obj2, x => x.age === 99);
assertEqual(result2, undefined); // Expected output: ✅ Assertion Passed: undefined === undefined

// Test case 3
const obj3 = {
  "Honda Civic Type R": { hp: 315, maxspeed: 275 },
  "Toyota GR Supra": { hp: 382, maxspeed: 250 },
  "Volkswagen Golf R": { hp: 315, maxspeed: 250 },
  "Hyundai Elantra N": { hp: 315, maxspeed: 225 }
};
const result3 = findKey(obj3, x => x.hp > 315 && x.maxspeed > 200);
assertEqual(result3, "Toyota GR Supra"); // Expected output: ✅ Assertion Passed: Toyota GR Supra === Toyota GR Supra