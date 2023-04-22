// takes in an array and returns an object that shows the number of times an item appears in the array.

// allItems: an array of strings we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {

    // inside the loop, 
    // increment the counter for each item:
    // set a property with that string key to:
    // the value that was already there (or zero if nothing there) with 1 added to it.
    // Lastly, we need to be more specific about what should be counted, ignoring the other items.

    // if condition to only increment our count in results if the item is found in the itemsToCount object.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}

module.exports = countOnly;