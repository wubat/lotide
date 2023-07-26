const tail = require("../tail")
const assert = require('chai').assert

describe("#tail", () => {
  it("should return [2,3] for", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  })

  it("should return 'doc', for ", () => {
    assert.deepEqual(tail(["whats","up","doc", "?"]), ["up", "doc", "?"])
  })

});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
