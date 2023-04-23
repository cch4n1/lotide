//This function takes in a source array and a itemsToRemove array.
//It returns a new array with only those elements from source that
//are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  let returnArray = [];
  //store results
  for (let i = 0; i < source.length; i++) {
    //loop through source array
    let found = false;
    //declare found switch
    for (let j = 0; j < itemsToRemove.length; j++) {
      //loop through itemsToRemove array
      if (source[i] === itemsToRemove[j]) {
        found = true;
        //if item in source matches item in itemToRemove, found = true
      }
    }
    if (!found) {
      returnArray.push(source[i]);
      //if item in source was not found in itemToRemove, push to returnArray
    }
  }

  return returnArray;

};

module.exports = without;