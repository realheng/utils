import { expect } from "chai";
import _flatten from ".";
describe("test _flatten", function () {
  it("test _flatten on array", function () {
    const ary = [[1, 2, 3], 4, 5, [6, 7, 8, 9, [10, 11]]];

    expect(_flatten(ary, true)).not.deep.eq([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]);

    expect(_flatten(ary, true)).deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]]);
    expect(_flatten(ary)).deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});
