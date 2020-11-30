import { expect } from "chai";
import _negate from "./";
import _filter from "../../collection-functions/filter";
describe("test negate", function () {
  it("test negate filter", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(
      _filter(
        ary,
        _negate(function (value, key, list) {
          return value >= 3;
        })
      )
    ).deep.equal([1, 2]);
  });
});
