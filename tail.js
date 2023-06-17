const args = process.argv.slice(2); 
const expectedArg = args[0];
const actualArg = args[1];

const assertEqual = function(expectedArg, actualArg) {
  if (args[0] === args[1]) {
    console.log(`💚💚💚 Assertion Passed: ${expectedArg} === ${actualArg}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expectedArg} !== ${actualArg}`)
  }
};

function tail(arr) {
  return arr.slice(2)
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!