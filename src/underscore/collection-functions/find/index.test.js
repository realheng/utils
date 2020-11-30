import _find from ".";

import { expect } from "chai";

describe("test _find", function () {
  it("test _find array", function () {
    const ary = [1, 2, 3, 4, 5];

    expect(
      _find(ary, function (value) {
        return value > 3;
      })
    ).equal(4);
  });
  it("test _find obj", function () {
    const obj = {
      name: "yzh",
      age: 18
    };

    expect(
      _find(obj, function (value) {
        return value > 6;
      })
    ).equal(18);
  });
});
