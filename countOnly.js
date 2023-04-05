const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    console.log(item);

    // inside the loop, 
// increment the counter for each item:
//   set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.
// Lastly, we need to be more specific about what should be counted, ignoring the other items.

// Instruction
// Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
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


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);