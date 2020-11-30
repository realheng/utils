import { expect } from "chai";
import _findWhere from ".";
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

    expect(_findWhere(ary, { name: "yzh" })).deep.equal(ary[0]);
    expect(_findWhere(ary, { name: "wxn" })).deep.equal(ary[2]);
  });
});
