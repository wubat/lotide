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

function middle(arr) {
  let middleArr = []

  if (arr.length <= 2) {
    middleArr = []
  }
  else if (arr.length % 2 === 1) {
    let middleIndexOdd = Math.floor(arr.length / 2)
    middleArr.push(arr[middleIndexOdd]) 
  }
  else if (arr.length % 2 === 0) {
    const middleIndexEven = arr.length / 2
    middleArr.push(arr[middleIndexEven - 1], arr[middleIndexEven])
  }
  console.log(middleArr)
}

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])