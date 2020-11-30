import { _last, _first } from ".";

import { expect } from "chai";
describe("test _last and _first", function () {
  it("test _last on array", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(_last(ary, 2)).deep.equal(ary.slice(-2));
    expect(_last(ary, 2)).not.deep.equal(ary.slice(2));
  });

  it("test _first on array", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(_first(ary, 2)).deep.equal(ary.slice(0, 2));
    expect(_first(ary, 2)).not.deep.equal(ary.slice(2));
  });
});
