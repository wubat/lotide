const middle = require('../middle')
const assert = require('chai').assert

describe("#middle", () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("should return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
  it("should return  [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
})


// assertArraysEqual(middle([1]), [])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])