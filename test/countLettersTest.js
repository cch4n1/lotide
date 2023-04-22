const assert = require('chai').assert;
const countLetters = require("../countLetters");

const result1 = countLetters("Lighthouse Labs");

assertEqual(result1.l, 2)
assertEqual(result1[" "], undefined)
assertEqual(result1.c, undefined)
assertEqual(result1.s, 2)