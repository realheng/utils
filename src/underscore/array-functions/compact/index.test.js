import _compact from ".";

import { expect } from "chai";
describe("test _compact", function () {
  it("test _compact on array", function () {
    expect(_compact([0, 1, false, 2, "", 3])).deep.eq([1, 2, 3]);
  });
  it("test _compact on object", function () {
    expect(
      _compact({
        name: "yzh",
        age: 18,
        married: false
      })
    ).deep.eq(["yzh", 18]);
  });
});
