const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require("../eqObjects");

// test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

eqObjects(shirtObject, anotherShirtObject); // => true
assertObjectsEqual(shirtObject, anotherShirtObject); // ✅ Assertion Passed: { color: 'red', size: 'medium' } === { size: 'medium', color: 'red' }
