const assertEqual = require('./assertEqual')

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

module.exports = countLetters;