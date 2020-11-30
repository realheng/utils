import { expect } from "chai";
import _mapObject from ".";
describe("test _mapObject", function () {
  it("test _mapObject", function () {
    const obj = {
      name: "yzh",
      age: 18
    };

    expect(
      _mapObject(obj, function (value, key) {
        if (key === "age") {
          return value * 2;
        }
        return value;
      })
    ).deep.equal({
      name: "yzh",
      age: 36
    });
  });
});
