const assertEqual = function(expected, actual) {
  if (expected === actual) {
    console.log( `💚💚💚 Assertion Passed: ${expected} === ${actual}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expected} !== ${actual}`)
  }
};

const findKey = function(obj, callback) {
  for (key in obj) {
    if (callback(obj[key])) {
      return key
    }
  }
}



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))