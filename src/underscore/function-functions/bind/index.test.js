import { expect } from "chai";
import _bind from ".";
describe("test _bind", function () {
  it("test _bind", function () {
    const context = {
      name: "yzh",
      age: 18
    };

    const name = "wxn";
    const func = function (greeting) {
      return greeting + this.name;
    };

    const bindFn = _bind(func, context);
    const bindFn2 = _bind(func);
    expect(bindFn("hello ")).eq("hello yzh");
    expect(bindFn2("hello ")).eq("hello ");
  });
});
