import { expect } from "chai";
import { _countBy, _groupBy, _indexBy, _partition } from ".";
describe("test group", function () {
  it("test _groupBy", function () {
    expect(_groupBy(["one", "two", "three"], "length")).deep.equal({
      3: ["one", "two"],
      5: ["three"]
    });
  });
  it("test _countBy", function () {
    expect(_countBy(["one", "two", "three"], "length")).deep.equal({
      3: 2,
      5: 1
    });
  });
  it("test _indexBy", function () {
    expect(_indexBy(["one", "two", "three"], "length")).deep.equal({
      3: "two",
      5: "three"
    });
  });
  it("test _partition", function () {
    expect(
      _partition(["one", "two", "three"], function (value, key) {
        return value.length > 3;
      })
    ).deep.equal([["three"], ["one", "two"]]);
  });
});
