import _findKey from ".";

import { expect } from "chai";

describe("test _findKey", function () {
  it("test _findkey on obj", function () {
    const obj = { name: "yzh", age: 18, weight: 88 };
    expect(
      _findKey(obj, function (value) {
        return typeof value === "number" && value >= 18;
      })
    ).equal("age");
  });
});
