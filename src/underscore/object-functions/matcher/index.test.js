import { expect } from "chai";
import _matcher from ".";
describe("test _mathcer", function () {
  it("test _matcher on obj", function () {
    const matcher = _matcher({
      name: "yzh",
      age: 18
    });

    const obj = {
      name: "yzh",
      age: 18,
      gf: "wxn"
    };

    expect(matcher(obj)).equal(true);
  });
});
