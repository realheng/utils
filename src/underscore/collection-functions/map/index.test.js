import { expect } from "chai";
import _map from ".";
describe("test map", function () {
  it("map obj", function () {
    const obj = { name: "yzh", age: 18 };
    expect(_map(obj)).deep.equal(["yzh", 18]);
    expect(
      _map(obj, function (value) {
        return value.toString().toUpperCase();
      })
    ).deep.equal(["YZH", "18"]);
  });
  it("map array", function () {
    const ary = [1, 2, 3, 4];
    expect(
      _map(ary, function (value) {
        return value * 2;
      })
    ).deep.equal([2, 4, 6, 8]);
  });
});
