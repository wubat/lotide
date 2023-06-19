const args = process.argv.slice(2) 
const expectedArg = args[0]
const actualArg = args[1]

const assertEqual = function(expectedArg, actualArg) {
  if (args[0] === args[1]) {

    console.log( `💚💚💚 Assertion Passed: ${expectedArg} === ${actualArg}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expectedArg} !== ${actualArg}`)
  }
};

function eqArrays(arr1, arr2) {
  if (arr1 === arr2) {
    return true
  }
  else {
    return false
  }
}

console.log([1] === [1])
assertEqual(eqArrays([1, 1, 1], [2, 1, 1]), false)
assertEqual(eqArrays([1, 1, 1], [1, 1, 1]), true)