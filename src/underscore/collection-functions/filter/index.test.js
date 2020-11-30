import { expect } from "chai";
import _filter from ".";
describe("test _filter", function () {
  it("filter array", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(
      _filter(ary, function (value, key, list) {
        return value >= 3;
      })
    ).deep.equal([3, 4, 5]);
  });

  it("filter object", function () {
    const obj = {
      name: "yzh",
      age: 18
    };
    expect(
      _filter(obj, function (value, key, list) {
        return key !== "name";
      })
    ).deep.equal([18]);
  });
});
