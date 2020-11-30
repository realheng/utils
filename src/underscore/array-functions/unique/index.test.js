import { expect } from "chai";
import _unique from ".";
describe("test _contains", function () {
  it("test _contains on array", function () {
    const ary = [
      { age: 13, name: "tom" },
      { age: 15, name: "jack" },
      { age: 13, name: "bob" }
    ];

    expect(_unique(ary, "age")).deep.equal([
      { age: 13, name: "tom" },
      { age: 15, name: "jack" }
    ]);
  });
});
