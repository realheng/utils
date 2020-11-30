// createAssigner通过高阶函数和闭包完成了
// _.extend,_.extendOwn,_.defaults三个函数功能
// 完成的只是对象的浅合并
import { objKeys, allObjKeys } from "../../utils";
export default function createAssigner(keysFunc, undefinedOnly) {
  return function (obj) {
    const argsLength = arguments.length;
    if (obj == null || argsLength < 2) return obj;
    for (let i = 1; i < argsLength; i++) {
      const source = arguments[i],
        // 这里keysFunc可以是_.keys，也可以是_.allKeys
        keys = keysFunc(source);
      for (const key of keys) {
        // undefinedOnly这个参数是用来判断是否覆盖的
        // 如果undefinedOnly为true，就说明不覆盖，即obj[key]只有为undefined时才覆盖。
        // 如果undefinedOnly不传或者为false，那么就直接覆盖
        if (!undefinedOnly || obj[key] === void 0) {
          obj[key] = source[key];
        }
      }
    }
    return obj;
  };
}

export const extendOwn = createAssigner(objKeys, false);
export const extendAll = createAssigner(allObjKeys, false);
export const defaults = createAssigner(objKeys, true);
