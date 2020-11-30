import { expect } from "chai";
import { _pick, _omit } from ".";
describe("test _pick and _omit ", function () {
  it("test _pick on object", function () {
    const student = {
      name: "wxj",
      age: 13,
      family: {
        son: "lcx"
      },
      hobby: "soccer"
    };

    expect(_pick(student, "name", "age")).deep.eq({
      name: "wxj",
      age: 13
    });
    expect(_pick(student, ["family", ["son"]])).deep.eq({
      family: {
        son: "lcx"
      }
    });
  });
  it("test _omit on object", function () {
    const student = {
      name: "wxj",
      age: 13,
      family: {
        son: "lcx"
      },
      hobby: "soccer"
    };

    expect(_omit(student, "name", "age")).deep.eq({
      family: {
        son: "lcx"
      },
      hobby: "soccer"
    });
    expect(
      _omit(student, function (value, key) {
        return key === "family";
      })
    ).deep.eq({
      name: "wxj",
      age: 13,
      hobby: "soccer"
    });
  });
});
