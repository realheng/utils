import { expect } from "chai";
import { _zip } from ".";
describe("test _zip", function () {
  it("test _zip on array", function () {
    const ary = [
      ["moe", "larry", "curly"],
      [30, 40, 50],
      [true, false, false]
    ];
    expect(_zip(...ary)).deep.equal([
      ["moe", 30, true],
      ["larry", 40, false],
      ["curly", 50, false]
    ]);
  });
});
