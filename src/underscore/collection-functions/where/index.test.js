import { expect } from "chai";
import _where from ".";
describe("test _where", function () {
  it("test _where on array", function () {
    const ary = [
      {
        name: "yzh",
        age: 18
      },
      {
        name: "yzh",
        gf: "wxn"
      },
      {
        name: "wxn",
        bf: "yzh"
      }
    ];

    expect(_where(ary, { name: "yzh" })).deep.equal(ary.slice(0, 2));
    expect(_where(ary, { name: "wxn" })).deep.equal(ary.slice(-1));
  });
});
