import { expect } from "chai";
import _some from ".";
import { _identity } from "../../base";
describe("test _some", function () {
  it("test _some on array", function () {
    const ary1 = [null, undefined, 0, 1];
    const ary2 = [null, undefined];
    expect(_some(ary1), _identity).equal(true);
    expect(_some(ary2), _identity).equal(false);
  });

  it("test _some on object", function () {
    const obj1 = {
      name: "yzh",
      age: 18
    };

    expect(
      _some(obj1, function (value, key) {
        return key === "name";
      })
    ).equal(true);

    expect(
      _some(obj1, function (value, key) {
        return key === "hobbies";
      })
    ).equal(false);
  });
});
