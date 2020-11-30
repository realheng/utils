import { expect } from "chai";
import _memoize from ".";
describe("test memoize", function () {
  it("test _memoize on fibonacci", function () {
    let i = 0;
    var fibonacci = _memoize(function (n) {
      i++;
      return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    });
    fibonacci(5);
    expect(i).eq(6);
  });
});
