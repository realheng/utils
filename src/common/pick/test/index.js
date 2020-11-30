// _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
// => {name: 'moe', age: 50}

// _.pick({name: 'moe', age: 50, userid: 'moe1'}, ['name', 'age']);
// => {name: 'moe', age: 50}

// _.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//   return _.isNumber(value);
// });
// => {age: 50}

import pick from "../src";

export default () => {
  console.log(pick({ name: "moe", age: 50, userid: "moe1" }, "name", "age"));
  console.log(pick({ name: "moe", age: 50, userid: "moe1" }, ["name", "age"]));
  console.log(
    pick({ name: "moe", age: 50, userid: "moe1" }, function (
      value,
      key,
      object
    ) {
      return typeof value === "number";
    })
  );
};
