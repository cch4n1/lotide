const flatten = function(arr1) {

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      result.push(...arr1[i]);
    } else {
      result.push(arr1[i]);
    }
  }
  return result;
};

module.exports = flatten;