//returns a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
//the callback should only be provided one value: The item in the array.
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;