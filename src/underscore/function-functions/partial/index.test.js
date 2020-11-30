import { expect } from "chai";
import { _ } from "../../base";
import _partial from ".";
describe("test partial", function () {
  it("test partial", function () {
    var subtract = function (a, b) {
      console.log("b: ", b);
      console.log("a: ", a);
      return b - a;
    };
    const sub5 = _partial(subtract, _, 20);
    expect(sub5(5)).eq(15);
  });
});
