const findKey = function(obj, callback) {
  for (key in obj) {
    if (callback(obj[key])) {
      return key
    }
  }
}


module.exports = findKey;