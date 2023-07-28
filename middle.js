function middle(arr) {
  
  let middleArr = []

  if (arr.length <= 2) {
    middleArr = []
  }
  else if (arr.length % 2 === 1) {
    let middleIndexOdd = Math.floor(arr.length / 2)
    middleArr.push(arr[middleIndexOdd]) 
  }
  else if (arr.length % 2 === 0) {
    const middleIndexEven = arr.length / 2
    middleArr.push(arr[middleIndexEven - 1], arr[middleIndexEven])
  }
  return middleArr
}

module.exports = middle 