import _reducer from ".";
import { _reducerRight } from ".";
import { expect } from "chai";

describe("test _reducer and _reducerRight", function () {
  it("_reducer array", function () {
    const ary = [1, 2, 3, 4];
    expect(
      _reducer(ary, (memo, current) => {
        return memo + current;
      })
    ).equal(10);

    expect(
      _reducer(ary, (memo, current) => {
        return memo * current;
      })
    ).equal(24);
  });

  it("_reducer obj", function () {
    const obj = {
      name: "yzh"
    };
    expect(
      _reducer(obj, (memo, current) => {
        return memo + current;
      })
    ).equal("yzh");
  });

  it("_reducerRight array", function () {
    const ary = [1, 2, 3, 4];
    expect(
      _reducerRight(ary, (memo, current) => {
        return memo + current;
      })
    ).equal(10);

    expect(
      _reducerRight(ary, (memo, current) => {
        return memo * current;
      })
    ).equal(24);
  });
});
