import { cb, isArrayLike } from "../../base";
import _keys from "../../object-functions/keys";
const _each = function (obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  // 如果是类数组，那么就直接取length循环即可
  if (isArrayLike(obj)) {
    const length = obj.length;
    for (let index = 0; index < length; index++) {
      const item = obj[index];
      iteratee(item, index, obj);
    }
  } else {
    const keys = _keys(obj);
    const length = keys.length;
    for (let index = 0; index < length; index++) {
      iteratee(obj[keys[index]], keys[index], obj);
    }
  }
};

export default _each;
