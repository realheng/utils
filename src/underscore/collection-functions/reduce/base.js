import { isArrayLike, cb } from "../../base";
import _keys from "../../object-functions/keys";
// dir代表正向还是负向
const createReducer = function (dir) {
  const reducer = function (obj, iteratee, memo, initial) {
    const keys = !isArrayLike(obj) && _keys(obj);
    const length = (keys || obj).length;
    let index = dir > 0 ? 0 : length - 1;
    // 如果不存在初始值，那么就用第一个元素重置memo
    if (!initial) {
      memo = obj[keys ? keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      const currentKey = keys ? keys[index] : index;

      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function (obj, iteratee, memo, context) {
    iteratee = cb(iteratee, context);
    const initial = arguments.length >= 3;
    return reducer(obj, iteratee, memo, initial);
  };
};
export default createReducer;
