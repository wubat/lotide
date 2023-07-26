const assertEqual = require("./assertEqual")
const args = process.argv.slice(2); 
const expectedArg = args[0];
const actualArg = args[1];



function head(arr) {
  return arr[0]
};

module.exports = head;