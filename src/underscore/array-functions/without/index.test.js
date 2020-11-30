import { expect } from "chai";
import _without from ".";
describe("test _without", function () {
  it("test _without on array", function () {
    const ary = [2, 3, 4, 5, 6, 7];
    expect(_without(ary, 4, 5, 6, 7)).deep.eq([2, 3]);
    expect(_without(ary, 4, 5, 6)).deep.eq([2, 3, 7]);
  });
});
