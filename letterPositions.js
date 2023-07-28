const letterPositions = function(sentence) {
  let results = {}
  const sentenceLetters = sentence.split(" ").join("")

  for (let i = 0; i < sentenceLetters.length; i++) {
    if (results[sentenceLetters[i]]) {
      results[sentenceLetters[i]].push(i)
    }
    else {
      results[sentenceLetters[i]] = [i]
    }
  }

  return results
}

module.exports = letterPositions