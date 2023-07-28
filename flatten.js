function flatten(arr) {
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j])
      }
    }
      else {
        newArray.push(arr[i])
      }
    }
    console.log(newArray)
}
  
module.exports = flatten