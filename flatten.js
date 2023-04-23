// Takes in a nested array and returns a flattened array.
const flatten = function(arr1) {

  let result = [];
  // stores the result
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      result.push(...arr1[i]);
       // if current element is an array, spread contents into the result array
    } else {
      result.push(arr1[i]);
      // otherwise, push the element itself into the result array
    }
  }
  return result;
};

module.exports = flatten;