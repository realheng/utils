import { expect } from "chai";
import _extend, { _defaults, _extendOwn } from ".";
describe("test extend", function () {
  it("test _extend", function () {
    const obj1 = {
      name: "yzh",
      age: 18,
      gf: "wxn"
    };

    const obj2 = {
      name: "wxn",
      age: 20,
      bf: "yzh"
    };
    expect(_extend(obj1, obj2)).deep.equal({
      name: "wxn",
      age: 20,
      gf: "wxn",
      bf: "yzh"
    });
  });

  it("test _defaults", function () {
    const obj1 = {
      name: "yzh",
      age: 18,
      gf: "wxn"
    };

    const obj2 = {
      name: "wxn",
      age: 20,
      bf: "yzh"
    };
    expect(_defaults(obj1, obj2)).deep.equal({
      name: "yzh",
      age: 18,
      gf: "wxn",
      bf: "yzh"
    });
  });
});
