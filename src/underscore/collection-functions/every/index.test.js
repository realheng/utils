import { expect } from "chai";
import _every from ".";
import { _identity } from "../../base";
describe("test _every", function () {
  it("test _every array", function () {
    const ary = [1, 2, null, undefined, 3];
    expect(_every(ary, _identity)).equal(false);
  });
});
