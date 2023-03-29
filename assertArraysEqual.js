// // this function should return a boolean value: matches or not
// /**
//  *
//  * @param {[]} arr1
//  * @param {[]} arr2
//  * @returns boolean
//  */
// const eqArrays = function(arr1, arr2) {
//   //if array1 or array2 is falsey (undefined, null)
  
//   if (!arr1 || !arr2) {
//     return false, console.log(`🚫 failed: ${arr1} !== ${arr2}`);
//   }
//   if (arr1.length !== arr2.length) {
//     return false, console.log(`🚫 failed: ${arr1} !== ${arr2}`);
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false, console.log(`🚫 failed: ${arr1} !== ${arr2}`);
//     }
//     // [1, 2, [3, 4], 5], [1, 2, [3, 7], 5]
//     if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//       eqArrays(arr1[i], arr2[i]);
//     }
//   }
//   return true, console.log(`✅ Passed: ${arr1} === ${arr2}`);
// };

// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

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