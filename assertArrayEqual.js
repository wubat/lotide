
function eqArrays(arr1, arr2) {
  if (arr1 === arr2) {
    return true
  }
  else {
    return false
  }
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`💚💚💚 Assertion Passed`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed`)
  }
}

assertArraysEqual([1, 1, 1], [1, 1, 1])
assertArraysEqual([2, 2, 2], [2, 2, 3])