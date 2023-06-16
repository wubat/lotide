// const args = process.argv.slice(2) 

// const assertEqual = function(args[0], args[1]) {
//   if (args[0] === args[1]) {
//     console.log( "💚💚💚 Assertion Passed: " + args[0] + " === " + args[1])
//   }
//   else {
//     console.log("💔💔💔 Assertion Failed: " + args[0] + " !== " + args[1])
//   }
// };



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("💚💚💚 Assertion Passed: " + actual + " === " + expected)
  };
  else {
    console.log("💔💔💔 Assertion Failed: " + actual + " !== " + expected)
  };
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);