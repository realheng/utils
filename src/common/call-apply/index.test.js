import { call, apply } from ".";
import { expect } from "chai";
describe("test call and apply", function () {
  function show(a, b) {
    return this.name + a + b;
  }
  const obj = {
    name: "yzh"
  };

  it("test call", function () {
    expect(call(show, obj, 7, 8)).equal("yzh78");
  });
  it("test apply", function () {
    expect(apply(show, obj, [7, 8])).equal("yzh78");
  });
});
