import { expect } from "chai";
import _indexOf, { _lastIndexOf } from ".";

describe("test indexOf and lastIndexOf ", function () {
  it("test indexOf on ary ", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(_indexOf(ary, 3)).equal(2);
    expect(_indexOf(ary, 1)).equal(0);
  });

  it("test lastIndexOf on ary ", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(_lastIndexOf(ary, 3)).equal(2);
    expect(_lastIndexOf(ary, 1)).equal(0);
  });
});
