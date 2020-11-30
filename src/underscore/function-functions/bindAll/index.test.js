import { expect } from "chai";
import _bindAll from ".";
describe("test bindAll", function () {
  it("test bindAll on object", function () {
    const obj = {
      name: "yzh",
      age: 18,
      showAge() {
        return this.age;
      },
      showName() {
        return this.name;
      }
    };
    _bindAll(obj, "showName");
    const showName = obj.showName;
    expect(showName()).eq("yzh");
  });
});
