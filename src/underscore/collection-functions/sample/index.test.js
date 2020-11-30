import { expect } from "chai";
import _sample from ".";
describe("test sample", function () {
  it("call sample on number", function () {
    const ary = [1, 2, 3, 4];
    expect(ary.indexOf(_sample(ary))).not.equal(-1);
    expect(_sample(ary, ary.length).length).equal(4);
  });
});
