// Takes in an array (allItems) and an object (itemsToCount) and returns an object with the count of each item in the allItems array that matches a key in the itemsToCount object.

// allItems: an array of strings we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {

    if (itemsToCount[item]) {
       // If the 'item' matches a key in the 'itemsToCount' object:
      if (results[item]) {
        // If the 'item' already exists as a key in the 'results' object:
        results[item] += 1;
         // Increment the count for this 'item' by 1.
      } else {
        // If the 'item' doesn't already exist as a key in the 'results' object:
        results[item] = 1;
         // Add a new key to the 'results' object for this 'item', with a value of 1.

      }
    }
  }

  return results;
}

module.exports = countOnly;