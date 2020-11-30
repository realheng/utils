import { isArrayLike, cb } from "../../base";
import _keys from "../../object-functions/keys";
const _map = function (obj, iteratee, context) {
  const result = [];
  iteratee = cb(iteratee, context);
  if (isArrayLike(obj)) {
    const length = obj.length;
    for (let index = 0; index < length; index++) {
      result.push(iteratee(obj[index], index, obj));
    }
  } else {
    const keys = _keys(obj);
    const length = keys.length;
    for (let index = 0; index < length; index++) {
      const key = keys[index];
      const item = obj[key];
      result.push(iteratee(item, key, obj));
    }
  }
  return result;
};

export default _map;
