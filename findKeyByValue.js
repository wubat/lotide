const assertEqual = function(expected, actual) {
  if (expected === actual) {
    console.log( `💚💚💚 Assertion Passed: ${expected} === ${actual}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expected} !== ${actual}`)
  }
};

function findKeyByValue(obj, value) {
  for (key in obj) {
    if (obj[key] === value) {
      return key
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, ), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))