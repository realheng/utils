import { expect } from "chai";
import _pairs from ".";
describe("test _pairs", function () {
  it("test _pairs", function () {
    const obj = {
      name: "yzh",
      age: 18
    };

    expect(_pairs(obj)).deep.eq([
      ["name", "yzh"],
      ["age", 18]
    ]);
  });
});
