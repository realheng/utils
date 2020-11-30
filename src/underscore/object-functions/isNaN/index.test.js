import { expect } from "chai";
import _isNaN from ".";

describe("test isNaN", function () {
  it("test isNaN on normal number", function () {
    expect(_isNaN(5)).equal(false);
  });
  it("test isNaN on NaN", function () {
    expect(_isNaN(Number("12345jj"))).equal(true);
  });
});
