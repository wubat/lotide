const assertEqual = function(expected, actual) {
  if (expected === actual) {
    console.log( `💚💚💚 Assertion Passed: ${expected} === ${actual}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expected} !== ${actual}`)
  }
};

module.exports = assertEqual;