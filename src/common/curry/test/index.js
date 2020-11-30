import curry from "../src";
export default () => {
  const add = curry(function (a, b) {
    return a + b;
  });
  console.log(add(1)(2));
  console.log(add(1, 2));
};
