import keys from "./";
import { expect } from "chai";

describe("test _.keys ", function () {
  it("test obj", function () {
    const obj = { name: "yzh", age: 18 };
    expect(keys(obj)).deep.equal(["name", "age"]);
  });

  it("test array", function () {
    const ary = [1, 2, 3, 4, 5];
    expect(keys(ary)).deep.equal(["0", "1", "2", "3", "4"]);
  });
});
