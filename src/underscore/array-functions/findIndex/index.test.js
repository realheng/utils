import { expect } from "chai";
import _findIndex, { _findLastIndex } from ".";
describe("test _findIndex and _findLastIndex", function () {
  it("test _findIndex in array", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(
      _findIndex(ary, function (value) {
        return value > 2;
      })
    ).equal(2);
  });

  it("test _findLastIndex in array", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(
      _findLastIndex(ary, function (value) {
        return value > 2;
      })
    ).equal(4);
  });
});
