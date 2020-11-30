import { expect } from "chai";
import _ from ".";
describe("test chain", function () {
  it("test chain", function () {
    expect(
      _.chain([1, 2, 3])
        .map(function (value) {
          return value * value;
        })
        .value()
    ).deep.equal([1, 4, 9]);
  });

  expect(_([1, 2, 3]).value()).deep.equal([1, 2, 3]);
});
