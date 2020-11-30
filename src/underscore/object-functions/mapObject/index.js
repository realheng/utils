import { cb } from "../../base";
import _keys from "../../object-functions/keys";

const _mapObject = function (obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  const keys = _keys(obj);
  const length = keys.length;
  const result = {};

  for (let index = 0; index < length; index++) {
    const key = keys[index];
    result[key] = iteratee(obj[key], key, obj);
  }
  return result;
};

export default _mapObject;
