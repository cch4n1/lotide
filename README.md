# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cch4n1/lotide`

**Require it:**

`const _ = require('@cch4n1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arrInput)`: Get the first element of an array.
* `tail(arrInput)`: Get everything except the first element of an array.
* `middle(array)`: Takes in an array and returns the middle elements as new array. If input array has odd number of elements, returns single middle element. If input array has even number of elements, returns two middle elements. 
* `flatten(arr1)`: Takes in a nested array and returns a flattened array.
* `countLetters(lettersToCount)`: Takes in a string and returns an object that keeps track of number of times each letter appears in the string.
* `countOnly(allItems, itemsToCount)`: Takes in an array (allItems) and an object (itemsToCount) and returns an object with the count of each item in the allItems array that matches a key in the itemsToCount object.
* `assertArraysEqual(arr1, arr2)`: Takes in two arrays (arr1 and arr2) and returns a boolean value indicating whether the two arrays match or not.
* `assertEqual(actual, expected)`: Compares two values (actual, expected) and displays a series of success / failure messages printed to the console based on a matching or non-matching outcomes.
* `eqArrays(arr1, arr2)`: Compares two arrays (arr1, arr2) and returns true for a perfect match.
* `eqObjects(object1, object2)`: Returns true if both objects have identical keys with identical values.
* `assertObjectsEqual(actual, expected)`: Compares two objects and gives a pass or fail message depending on if there is a match
* `findKey(object, callback)`: Returns the first object key that fulfills the requirements of callback
* `findKeyByValue(object, value)`: Returns the first object key found based on the value
* `letterPositions(sentence)`: Takes a string and returns an object with the index positions of each letter
* `map(array, callback)`: Returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value. The callback should only be provided one value: The item in the array.
* `without(source, itemsToRemove)`: Returns a new array with only those elements from source that are not present in the itemsToRemove array.