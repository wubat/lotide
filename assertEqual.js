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



// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("💚💚💚 Assertion Passed: " + actual + " === " + expected)
//   };
//   else {
//     console.log("💔💔💔 Assertion Failed: " + actual + " !== " + expected)
//   };
// };

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);