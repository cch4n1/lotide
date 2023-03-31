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


// Implement middle which will take in an array and return the middle-most element(s) of the given array.

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.

// For arrays with odd number of elements, an array containing a single middle element should be returned.

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// Instruction
// Write test assertions for the various scenarios with middle

// We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.

const middle = function(array) {
  let middleArray = [];

  if (array.length <= 2) {
    return middleArray;
  }

  if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
  } else {
    middleArray.push(array[(array.length - 1) / 2]);
  }

  return middleArray;
  
};

console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([]), []); // Pass: []
assertArraysEqual(middle([1, 2]), []); // Pass: []
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // Pass: [5, 6]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // Pass: [5]
