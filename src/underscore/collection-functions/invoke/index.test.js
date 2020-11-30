import { expect } from "chai";
import _invoke from ".";
describe("test _invoke", function () {
  it("test _invoke on array", function () {
    const ary = [
      [2, 1, 3],
      [7, 5, 3]
    ];
    expect(
      _invoke(ary, "sort", function (a, b) {
        return b - a;
      })
    ).deep.equal([
      [3, 2, 1],
      [7, 5, 3]
    ]);
  });
});
