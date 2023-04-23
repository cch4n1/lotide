//Takes in two arrays (arr1 and arr2) and returns a boolean value indicating whether the two arrays match or not.
const assertArraysEqual = function(arr1, arr2) {
  //if array1 or array2 is falsey (undefined, null), return false
  if (!arr1 || !arr2) {
    return false;
  }
   //if array1 length does not match array2 length, return false
  if (arr1.length !== arr2.length) {
    return false; 
  }
  for (let i = 0; i < arr1.length; i++) {
    //if at any iteration, the elements do not match, the function returns false.
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = assertArraysEqual;