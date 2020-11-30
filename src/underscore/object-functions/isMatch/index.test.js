import { expect } from "chai";
import _isMatch from ".";
describe("test _isMatch", function () {
  it("test _isMatch on object", function () {
    const obj1 = {
      name: "yzh",
      age: 18
    };
    const attrs = {
      name: "yzh",
      age: 18
    };

    const attrs2 = {
      name: "yzh",
      age: 32
    };

    expect(_isMatch(obj1, attrs)).equal(true);
    expect(_isMatch(obj1, attrs2)).equal(false);
  });
});
