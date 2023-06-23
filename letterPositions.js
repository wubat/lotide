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
    console.log(`💚💚💚 Assertion Passed ${arr1} === ${arr2}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed ${arr1} === ${arr2}`)
  }
}

const letterPositions = function(sentence) {
  let results = {}
  const sentenceLetters = sentence.split(" ").join("")

  for (let i = 0; i < sentenceLetters.length; i++) {
    if (results[sentenceLetters[i]]) {
      results[sentenceLetters[i]].push(i)
    }
    else {
      results[sentenceLetters[i]] = [i]
    }
  }

  return results
}

console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions("hello").e, [1] )
