function findKeyByValue(obj, value) {
  for (key in obj) {
    if (obj[key] === value) {
      return key
    }
  }
}

module.exports = findKeyByValue