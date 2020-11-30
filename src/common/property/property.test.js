import property from ".";
import { expect } from "chai";
describe("test property", () => {
  const person = {
    name: "yzh",
    age: 18,
    relative: {
      gf: "wxn",
      father: "yyj",
      mother: "zhr"
    }
  };
  it("get father should be 'yyj'", () => {
    const getFahter = property(["relative", "father"]);
    console.log(expect(getFahter(person)).equal("yyj"));
  });
  it("get name should be 'yzh'", () => {
    const getName = property("name");
    console.log(expect(getName(person)).equal("yzh"));
  });
  it("get relative should be an object", () => {
    const getRelative = property("relative");
    const obj = getRelative(person);
    expect(getRelative(person)).deep.equal(obj);
  });
  it("get empty key", () => {
    const getEmptyKey = property(["relative", "teacher"]);
    expect(getEmptyKey(person)).to.be.equal(undefined);
  });
});
