// _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
// => {name: 'moe', age: 50}

// _.pick({name: 'moe', age: 50, userid: 'moe1'}, ['name', 'age']);
// => {name: 'moe', age: 50}

// _.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//   return _.isNumber(value);
// });
// => {age: 50}

// 该函数有三种传参方式，三种方式的第一个参数都是需要pick的对象
// 1. 第二个参数开始是一系列的key
// 2. 第二个参数是key数组
// 3. 第二个参数是predicate
// 1，2两种情况都可以用flatten的false,false来展开

import { trans2func, objKeys } from "../../utils";
import flatten from "../../flatten";
export default function pick(obj, iteratee, context) {
  const result = {};
  const keys = objKeys(obj);
  const length = keys.length;
  if (typeof iteratee === "function") {
    iteratee = trans2func(iteratee, context);
  } else {
    const pickKeys = flatten(arguments, false, false, 1);
    iteratee = function (value, key) {
      return pickKeys.indexOf(key) !== -1;
    };
  }
  for (let index = 0; index < length; index++) {
    const key = keys[index];
    if (iteratee(obj[key], key, obj)) result[key] = obj[key];
  }
  return result;
}
