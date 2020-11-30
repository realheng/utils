import _each from "./";
import { expect } from "chai";
describe("test _each", function () {
  it("each array", function () {
    let sum = 0;
    const ary = [1, 2, 3, 4, 5];
    _each(ary, function (value) {
      sum += value;
    });

    expect(sum).equal(15);
  });
});
