
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

function flatten(arr) {
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j])
      }
    }
      else {
        newArray.push(arr[i])
      }
    }
    console.log(newArray)
}
  


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

// const testArray = [1, [6, 7, 8], 2, 3, 4, 5]
// console.log(Array.isArray(testArray[1][1]))