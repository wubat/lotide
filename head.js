const args = process.argv.slice(2); 
const expectedArg = args[0];
const actualArg = args[1];

const assertEqual = function(expectedArg, actualArg) {
  if (args[0] === args[1]) {
    console.log( `💚💚💚 Assertion Passed: ${expectedArg} === ${actualArg}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expectedArg} !== ${actualArg}`)
  }
};

function head(arr) {
  return arr[0]
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
