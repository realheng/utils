import { expect } from "chai";
import { _before, _after } from ".";
describe("test _before and _after", function () {
  it("test _before", function () {
    let n = 3;
    const _before3times = _before(3, function () {
      return --n;
    });
    expect(_before3times()).eq(2);
    expect(_before3times()).eq(1);
    expect(_before3times()).eq(1);
  });
});
