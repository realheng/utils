import { expect } from "chai";
import _intersection from ".";
describe("test _intersection", function () {
  it("test _intersection on array", function () {
    expect(_intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])).deep.equal([
      1,
      2
    ]);
  });
});
