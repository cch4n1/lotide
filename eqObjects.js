const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //stores keys of both input objects

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
    //if length of both objects dont match, return false
  }

  for (const key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // For each key, checks if both objects have an array value
      if (!eqArrays(object1[key], object2[key])) {
         // compare using eqArrays function
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
      // If values of keys are not equal, return false
    }
  }


  return true;
};

module.exports = eqObjects;