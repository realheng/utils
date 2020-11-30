import _toArray from ".";

import { expect } from "chai";
describe("test toArray", function () {
  it("test toArray on ArrayLike", function () {
    const aryLike = {
      0: "yzh",
      1: "wxn",
      2: "aslkdj",
      length: 3
    };
    expect(_toArray(aryLike)).deep.equal(["yzh", "wxn", "aslkdj"]);
  });

  it("test toArray on object", function () {
    const aryLike = {
      0: "yzh",
      1: "wxn",
      2: "aslkdj"
    };
    expect(_toArray(aryLike)).deep.equal(["yzh", "wxn", "aslkdj"]);
  });

  it("test toArray on array", function () {
    const aryLike = ["yzh", "wxn", "aslkdj"];
    expect(_toArray(aryLike)).deep.equal(["yzh", "wxn", "aslkdj"]);
  });
});
