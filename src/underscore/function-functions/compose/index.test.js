import { expect } from "chai";
import _compose from ".";
describe("test _compose", function () {
  it("test _compose", function () {
    var hello = function () {
      return "hello";
    };

    var world = function (hello) {
      return hello + " world";
    };
    var toUpperCase = function (str) {
      return str.toUpperCase();
    };

    var helloworld = _compose(toUpperCase, world, hello);
    expect(helloworld()).eq("hello world".toUpperCase());
  });
});
