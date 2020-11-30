import { expect } from "chai";
import _difference from ".";
describe("test _difference ", function () {
  it("test _difference ", function () {
    const ary = [2, 34, 5, 7, 9];
    const ary1 = [1, 2, 3, 4, 5];
    const ary2 = [3, 4, 5, 6, 7];
    expect(_difference(ary, ary1, ary2)).deep.eq([34, 9]);
  });
});
