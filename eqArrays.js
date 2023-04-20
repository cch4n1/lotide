// this function should return a boolean value: matches or not
/**
 *
 * @param {[]} arr1
 * @param {[]} arr2
 * @returns boolean
 */
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

module.exports = eqArrays;