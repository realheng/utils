import { expect } from "chai";

import equal from ".";

describe("test euqal", function () {
  it("NaN === NaN", function () {
    expect(equal(NaN, NaN)).to.be.equal(true);
  });
  it("5 === Number(5)", function () {
    expect(equal(5, Number(5))).to.be.equal(true);
  });
  it("object === object", function () {
    expect(equal({ name: "yzh" }, { name: "yzh" })).to.be.equal(true);
  });
  it("array === array", function () {
    expect(equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.be.equal(true);
  });
});
