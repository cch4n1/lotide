//This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source that
//are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  //if array1 or array2 is falsey (undefined, null)
  let returnArray = [];

  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
      }
    }
    if (!found) {
      returnArray.push(source[i]);
    }
  }

  return returnArray;

};

module.exports = without;