const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`💚💚💚 Assertion Passed ${arr1} === ${arr2}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed ${arr1} !== ${arr2}`)
  }
}

assertArraysEqual([1, 1, 1], [1, 1, 1])
assertArraysEqual([2, 2, 2], [2, 2, 3])

const takeUntil = function(array, callback) {
  let newArr = []

  for (item of array) {
    if (callback(item)) {
      break
    }
    else {
      newArr.push(item)
    }
  }

  return newArr
}

const results2 = takeUntil(data1, x => x ===2)
const results1 = takeUntil(data1, x => x < 0);
console.log(results1)

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [1])
