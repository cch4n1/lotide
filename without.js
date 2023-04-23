//This function takes in a source array and a itemsToRemove array.
//It returns a new array with only those elements from source that
//are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  //store results
  const returnArray = [];
  //loop through source array
  for (let i = 0; i < source.length; i++) {
    //declare found switch
    let found = false;
    //loop through itemsToRemove array
    for (let j = 0; j < itemsToRemove.length; j++) {
      //if item in source matches item in itemToRemove, don't add it to returnArray
      if (source[i] === itemsToRemove[j]) {
        found = true;
      }
    }
    //if item in source was not found in itemToRemove, add to returnArray
    if (!found) {
      returnArray.push(source[i]);
    }
  }

  return returnArray;

};

module.exports = without;