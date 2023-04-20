const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// tests:
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
assertEqual(assertArraysEqual(middle([]), []), true); // Pass: []
assertEqual(assertArraysEqual(middle([1, 2]), []), true); // Pass: []
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]), true); // Pass: [5, 6]
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]), true); // Pass: [5]