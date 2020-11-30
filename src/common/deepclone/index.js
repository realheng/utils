// 仅限于深拷贝能被json序列化的对象
import { isArrayLike, objKeys } from "../utils";
export default function deepClone(source, stack) {
  // 为了防止对象循环嵌套
  stack = stack || [];

  if (stack.indexOf(source) !== -1) {
    return;
  }
  const type = typeof source;
  // 排除掉null undefined 和一些其他非普通对象和数组的值
  if (source == null || (type !== "object" && type !== "function"))
    return source;

  stack.push(source);
  // 如果是数组，那么就只深度克隆数组的元素
  // 如果是对象，那么就深度克隆对象的所有可枚举键值对
  const keys = !isArrayLike(source) && objKeys(source);
  const length = (keys || source).length;
  const target = keys ? {} : [];

  for (let index = 0; index < length; index++) {
    const key = keys ? keys[index] : index;
    target[key] = deepClone(source[key], stack);
  }
  stack.pop();
  return target;
}
