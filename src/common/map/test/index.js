import map from "../src";

export default () => {
  const obj1 = {
    name: "yzh",
    age: 18
  };
  const obj2 = ["apple", "banana", "orange"];
  console.log(map(null, (value, key) => ({ key: value })));
  console.log(map(obj2, (value) => value.toUpperCase()));
};
