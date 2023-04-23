// Takes in a nested array and returns a flattened array.
const flatten = function(arr1) {
  // stores the result in an array
  const result = [];
  // loops through input array
  for (let i = 0; i < arr1.length; i++) {
    // if current element is an array, spread contents into the result array
    if (Array.isArray(arr1[i])) {
      result.push(...arr1[i]);
    } else {
      // otherwise, push the element itself into the result array
      result.push(arr1[i]);
    }
  }
  return result;
};

module.exports = flatten;