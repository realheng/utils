import { expect } from "chai";
import _shuffle from ".";
describe("test _shuffle", function () {
  it("test _shuffle", function () {
    const ary = [1, 2, 3];
    const count = 10001;
    const countObj = {};
    let result;
    for (let index = 0; index < count; index++) {
      result = _shuffle(ary);
      const key = JSON.stringify(result);
      if (countObj[key]) {
        countObj[key]++;
      } else {
        countObj[key] = 1;
      }
    }
    const keys = Object.keys(countObj);
    for (const key of keys) {
      countObj[key] = ((countObj[key] / count) * 100).toFixed(3) + "%";
    }

    expect(result).not.deep.equal(ary);
  });
});
