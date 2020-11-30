import { cb } from "../../base";
import _each from "../each";
const _filter = function (obj, predicate, context) {
  predicate = cb(predicate, context);
  const result = [];
  _each(obj, function (value, key, list) {
    if (predicate(value, key, list)) {
      result.push(value);
    }
  });

  return result;
};

export default _filter;
