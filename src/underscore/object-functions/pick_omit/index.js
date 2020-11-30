import { restArgs, _isFunction, optimizeCb } from "../../base";
import _keys from "../keys";
import _contains from "../../collection-functions/contains";
import { flatten } from "../../array-functions/flatten";
import _negate from "../../function-functions/negate";
const _pick = restArgs(function (obj, keys) {
  let iteratee = keys[0];
  const result = {};
  // 如果keys的第一个元素是函数
  if (_isFunction(iteratee)) {
    if (keys.length > 1) {
      iteratee = optimizeCb(iteratee, keys[1]);
    }
    keys = _keys(obj);
  } else {
    iteratee = function (value, key, obj) {
      return key in obj;
    };
    // 将keys平铺
    keys = flatten(keys, false, false);
  }

  // 不论传入的参数是计算函数还是属性名
  // 都会转换为一个计算函数，然后迭代keys
  // 通过计算函数返回为真值的key添加到result中
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = obj[key];
    if (iteratee(value, key, obj)) {
      result[key] = value;
    }
  }
  return result;
});

const _omit = restArgs(function (obj, keys) {
  let iteratee = keys[0];
  // 此时不能赋值context=keys[1]
  // 因为还不知道iteratee是否是函数
  // 如果不是的话那么还得去掉
  let context;
  if (_isFunction(iteratee)) {
    iteratee = _negate(iteratee);
    if (keys.length > 1) {
      context = keys[1];
    }
  } else {
    keys = flatten(keys, false, false);
    iteratee = function (value, key) {
      return !_contains(keys, key);
    };
  }
  return _pick(obj, iteratee, context);
});
export { _pick, _omit };
