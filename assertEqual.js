// const args = process.argv.slice(2) 
// const expectedArg = args[0]
// const actualArg = args[1]

const assertEqual = function(expected, actual) {
  if (expected === actual) {
    console.log( `💚💚💚 Assertion Passed: ${expected} === ${actual}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expected} !== ${actual}`)
  }
};



// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("💚💚💚 Assertion Passed: " + actual + " === " + expected)
//   };
//   else {
//     console.log("💔💔💔 Assertion Failed: " + actual + " !== " + expected)
//   };
// };

//test code

module.exports = assertEqual;