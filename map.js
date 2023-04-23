//The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  //stores result
  for (let item of array) {
    results.push(callback(item));
    //loops through array and pushes elements to result that match callback rules
  }
  return results;
}

module.exports = map;