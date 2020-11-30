import { expect } from "chai";
import _values from ".";
describe("test _values", function () {
  it("test _values on object", function () {
    const obj = {
      name: "yzh",
      age: 18
    };
    expect(_values(obj)).deep.equal(["yzh", 18]);
  });
});
