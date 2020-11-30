import flatten from "./base";

const _flatten = function (array, shallow) {
  return flatten(array, shallow, false);
};

export { flatten };
export default _flatten;
