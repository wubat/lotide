const words = ["ground", "control", "to", "major", "tom"];

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



const map = function(array, callback) {
  const results = [];

  for(item of array) {
    results.push(callback(item))
  }

  return results;
}

const results2 = map(words, word => word.toUpperCase())
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results2,[ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])