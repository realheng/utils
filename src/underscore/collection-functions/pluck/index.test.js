import { expect } from "chai";
import _pluck from ".";
describe("test pluck ", function () {
  it("test pluck on object array", function () {
    const stooges = [
      { name: "moe", age: 40 },
      { name: "larry", age: 50 },
      { name: "curly", age: 60 }
    ];

    expect(_pluck(stooges, "name")).deep.equal(["moe", "larry", "curly"]);
  });
  it("test pluck on array array", function () {
    const ary = [
      [1, 2, 3],
      [4, 5, 7],
      [8, 9, 10]
    ];

    expect(_pluck(ary, 2)).deep.equal([3, 7, 10]);
  });
});
