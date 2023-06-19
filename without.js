
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

const without = function(source, itemsToRemove) {
  let newArray = [...source] 
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i,1)
      }
    }
  }
  console.log(newArray)
  console.log(source)
}

// assertArraysEqual([1, 1, 1], [1, 1, 1])
// assertArraysEqual([2, 2, 2], [2, 2, 3])

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);