import extend from "../src/extend";

export default () => {
  const obj1 = {
    person: {
      name: "yzh",
      gf: "wxn",
      hobbies: {
        1: "read"
      }
    }
  };
  const obj2 = {
    person: {
      age: 18,
      hobbies: ["guitar"]
    }
  };
  console.log(extend(true, obj1, obj2));
};
