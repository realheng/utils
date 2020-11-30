import _union from ".";

import { expect } from "chai";
describe("test union ", function () {
  it("test union on array", function () {
    const ary = [1, 2, 3, 4, 5, [6, 7], 4, 3];
    const ary2 = [1, 2, 3, 4, 5];
    expect(_union(ary, ary2)).deep.eq([1, 2, 3, 4, 5, [6, 7]]);
  });
});
