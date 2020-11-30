import { expect } from "chai";
import _size from ".";
describe("test _size", function () {
  it("test _size on arrayLike", function () {
    const aryLike = {
      length: 3
    };
    expect(_size(aryLike)).equal(3);
  });

  it("test _size on object", function () {
    const obj = {
      name: "yzh",
      age: 18
    };
    expect(_size(obj)).equal(2);
  });
});
