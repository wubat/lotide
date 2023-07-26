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


module.exports = tail;