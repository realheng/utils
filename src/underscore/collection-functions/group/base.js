import _each from "../each";
import { cb } from "../../base";

const _group = function (behavior, partition) {
  return function (obj, iteratee, context) {
    const result = partition ? [[], []] : {};
    _each(obj, function (value, index) {
      iteratee = cb(iteratee, context);
      const key = iteratee(value, index, obj);
      behavior(result, value, key);
    });

    return result;
  };
};
export default _group;
