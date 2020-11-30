import chunk from ".";
import { expect } from "chai";

describe("测试chunk方法", function () {
  it("should be 3 array in result", function () {
    const ary = [1, 2, 3, 4, 5, 6];
    expect(chunk(ary, 2)).deep.equal([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);
  });
});
