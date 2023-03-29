const eqArrays = function(arr1, arr2) {
  //if array1 or array2 is falsey (undefined, null)


  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
};

//This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source that
//are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  //if array1 or array2 is falsey (undefined, null)
  let returnArray = [];

  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
      }
    }
    if (!found) {
      returnArray.push(source[i]);
    }
  }

  return returnArray;

};

// test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([2, 6, 3], [6]), ["2", 3]); // [2, 3], [2, 3]
console.log(without([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // [], []


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should Pass ✅: [2, 3] === [2, 3]
assertArraysEqual(without(["A", "B", "C"], [1]), ["A", "B", "C"]); // Should Pass ✅: [A, B, C] === [A, B, C]
assertArraysEqual(without([2, 6, 3], [6]), ["2", 3]); // Should Fail 🚫: [2, 3] !== ["2", 3]
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), []); // Should Pass ✅: [] === []