// 完成的功能是合并多个对象到第一个对象中去
// 第一个参数如果是一个布尔值，那么可以用来区分是浅拷贝还是深拷贝
// extend(true, obj1, obj2, obj3)

import { isArray, isPlainObject } from "../../utils";

// 深度扩展的核心有两点
// 1、如果待拷贝属性值是一个对象，那么就不能直接赋值，要深度合并
// 2、如果待拷贝属性值是对象，那么已有值需要和其类型一致（要么都是数组、要么都是对象）
// 如果不一致，就要对clone进行重新赋值使其类型一致

export default function extend() {
  // 默认不进行深层拷贝
  let deep = false;
  let name, src, copy;
  const length = arguments.length;
  // 用来维护参数的下标
  let index = 1;
  // 如果第一个参数==null，那么可以重置为一个空对象
  let target = arguments[0] || {};
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[index] || {};
    index++;
  }

  // 如果target不是一个对象的话那么我们是无法进行合并的
  // 所以要将其重置为一个空对象
  if (typeof target !== "object") {
    target = {};
  }

  // 以上都是参数的准备工作，将deep、target、index重置为函数所需要的值

  for (; index < length; index++) {
    // 取出待合并的对象
    const toExtendObj = arguments[index];
    if (toExtendObj !== null) {
      // 遍历待合并对象的属性
      for (name in toExtendObj) {
        src = target[name];
        copy = toExtendObj[name];

        // 如果copy是一个对象，且开启了深度扩展
        // 那么src也要进行深度扩展
        if (
          deep &&
          copy &&
          (typeof copy === "object" || typeof copy === "function")
        ) {
          // 这里要区分一下copy和src的类型
          // 如果copy和src都是对象，那么就直接合并
          // 如果copy是对象，src是数组，那么他们的类型就不一样
          // 如果类型不一样的话，那么src就要重新赋值为copy类型一致的空对象或者空数组
          const isCopyArray = isArray(copy);

          let clone;
          if (isCopyArray) {
            clone = src && isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy != null) {
          // 如果copy是一个简单类型，那么直接赋值即可
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
