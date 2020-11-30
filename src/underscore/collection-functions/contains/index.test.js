import { expect } from "chai";
import _contains from ".";

describe("test _contains", function () {
  it("test _contains on array", function () {
    const ary = [1, 2, 3, 2, 1];
    expect(_contains(ary, 2, 3)).equal(true);
    expect(_contains(ary, 3)).equal(true);
  });
  it("test _contains on object", function () {
    const obj = {
      name: "yzh",
      age: 18
    };
    expect(_contains(obj, 18)).equal(true);
    expect(_contains(obj, "yzh")).equal(true);
    expect(_contains(obj, "wxn")).equal(false);
  });
});
