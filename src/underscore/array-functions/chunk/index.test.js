import { expect } from "chai";
import _chunk from ".";
describe("test chunk", function () {
  it("test chunk on array", function () {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(_chunk(ary, 2)).deep.eq([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
    expect(_chunk(ary, 3)).deep.eq([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
});
