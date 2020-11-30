import { expect } from "chai";
import _range from ".";
describe("test _range ", function () {
  it("test _range on array", function () {
    expect(_range(10)).deep.eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(_range(0, 30, 7)).deep.eq([0, 7, 14, 21, 28]);
  });
});
