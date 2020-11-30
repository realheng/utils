import sortedIndex from ".";

import { expect } from "chai";

describe("test sortedIndex", function () {
  it("test sortedIndex on ary", function () {
    const ary = [1, 2, 5, 7, 8];
    expect(sortedIndex(ary, 3)).equal(2);
    expect(sortedIndex(ary, 99)).equal(ary.length);
    expect(sortedIndex(ary, -1)).equal(0);
    expect(
      sortedIndex(ary, 50, function (value) {
        return value * value;
      })
    ).equal(4);
  });
});
