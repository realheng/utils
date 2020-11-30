import { expect } from "chai";
import _sortBy from ".";
describe("test sortBy ", function () {
  it("test sortBy on object array", function () {
    const stooges = [
      { name: "moe", age: 40 },
      { name: "larry", age: 50 },
      { name: "curly", age: 60 }
    ];
    // _.sortBy(stooges, 'name');
    // => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
    expect(
      _sortBy(stooges, function (value) {
        return value.age;
      })
    ).deep.equal(
      stooges.sort((a, b) => {
        return a.age - b.age;
      })
    );
  });
});
