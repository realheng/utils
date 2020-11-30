import deepClone from ".";
import { expect } from "chai";
describe("test deepClone", function () {
  it("cloned object deep eaqul source ", function () {
    const person1 = {
      name: "yzh",
      age: 18,
      hobbies: [
        { name: "basketball" },
        {
          name: "reading"
        }
      ],
      relative: {
        girlFriend: "wxn",
        father: "yyj",
        mother: "zhr"
      }
    };
    const person2 = deepClone(person1);

    expect(person1).to.be.deep.equal(person2);
  });
  it("change source , cloned object not deep equal source", function () {
    const person1 = {
      name: "yzh",
      age: 18,
      hobbies: [
        { name: "basketball" },
        {
          name: "reading"
        }
      ],
      relative: {
        girlFriend: "wxn",
        father: "yyj",
        mother: "zhr"
      }
    };
    const person2 = deepClone(person1);
    person1.hobbies[0].name = "sleeping";
    expect(person1).to.not.be.deep.equal(person2);
  });

  it("test circular reference", function () {
    const person1 = {
      name: "yzh",
      age: 18
    };
    person1.person = person1;
    const person2 = deepClone(person1);
    expect(person2.person).equal(undefined);
  });
});
