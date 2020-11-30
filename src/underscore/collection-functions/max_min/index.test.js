import { expect } from "chai";
import { _max, _min } from ".";
describe("test max and min", function () {
  it("test max on ", function () {
    const ary = [
      {
        age: 17
      },
      {
        age: 17
      },
      {
        age: 18
      }
    ];

    expect(
      _max(ary, function (value) {
        return value.age;
      })
    ).deep.equal({
      age: 18
    });
  });
  it("test min  ", function () {
    const ary = [
      {
        age: 17
      },
      {
        age: 17
      },
      {
        age: 18
      },
      {
        age: 10
      }
    ];
    expect(
      _min(ary, function (value) {
        return value.age;
      })
    ).deep.equal({
      age: 10
    });
  });
});
