const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {


  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

//eqArrays

const eqArrays = function(arr1, arr2) {

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

//assertion

const newArr = [1, 2, 3, 4]
assertArraysEqual(map(newArr, newArr => newArr),[1, 2, 3, 4])