const takeUntil = function(array, callback) {
  let newArr = []

  for (item of array) {
    if (callback(item)) {
      break
    }
    else {
      newArr.push(item)
    }
  }

  return newArr
}

module.exports = takeUntil

