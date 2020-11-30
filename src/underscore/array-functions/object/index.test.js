import { expect } from "chai";
import _object from ".";
describe("test _object", function () {
  it("test _object without values", function () {
    const list = [
      ["moe", 30],
      ["larry", 40],
      ["curly", 50]
    ];
    expect(_object(list)).deep.equal({
      moe: 30,
      larry: 40,
      curly: 50
    });
  });

  it("test _object with values", function () {
    const list = ["moe", "larry", "curly"];
    const values = [30, 40, 50];
    expect(_object(list, values)).deep.equal({
      moe: 30,
      larry: 40,
      curly: 50
    });
  });
});
