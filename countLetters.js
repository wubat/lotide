const assertEqual = function(expected, actual) {
  if (expected === actual) {
    console.log( `💚💚💚 Assertion Passed: ${expected} === ${actual}`)
  }
  else {
    console.log(`💔💔💔 Assertion Failed: ${expected} !== ${actual}`)
  }
};

function countLetters(sentence) {
  let letterCount = {}
  const sentenceLetters = sentence.split(" ").join("")
  
  for (letter of sentenceLetters) {
  if (!letterCount[letter]) {
    letterCount[letter] = 1
  }
  else {
    letterCount[letter] ++ 
  }
 }
 
 return letterCount 
}


console.log(countLetters("lighthouse in the house"))
assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
})