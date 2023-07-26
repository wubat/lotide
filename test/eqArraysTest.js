const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

console.log([1] === [1])
assertEqual(eqArrays([1, 1, 1], [2, 1, 1]), false)
assertEqual(eqArrays([1, 1, 1], [1, 1, 1]), true)