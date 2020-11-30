import { toString, objKeys } from "../utils";

export default function equal(a, b) {
  // a === b成立的话也不代表a和b就相等，因为有+0和-0
  // a === b成立后判断如果a === 0，那就是说明a和b为+0、-0中的其中一种
  // 那么就需要用1/a === 1/b来判断

  // 排除完全相等的和+0 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b;

  // NaN我们认为是相等的
  // NaN和Number(NaN)在这里都会被排除掉
  // Number(NaN)和Number(NaN)是不相等的
  if (a !== a) return b !== b;

  // 因为null的type为object，所以尽早判断
  // 我们假设null和undefined只能和自身是相等的，如果他俩在完全相等判断中没有通过则在这里被排除掉
  if (a == null || b == null) return false;

  const type = typeof a;

  // 如果a为基本类型，且a不为函数（因为函数也是对象），并且b也不是对象
  // 那么就返回false
  // 如果a是基本类型，b是对象，还是用进行判断的
  // 比如 a=5, b=Number(5)
  // a是基本类型，b是对象，但我们认为他们是相等的
  if (type !== "object" && typeof b !== "object") return false;

  return deepEqual(a, b);
}

function deepEqual(a, b) {
  // 进入这里的要么a、b两者其一或者两者都是对象
  const className = toString.call(a);
  // 如果a和b的class类型不同，那么就不用判断，直接退出
  if (toString.call(b) !== className) return false;
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    default:
      break;
  }

  // 能走到这里，说明a、b他俩的class类型是一样的
  // 所以只用判断一个，另一个也是相同的
  const areArrys = className === "[object Array]";
  if (!areArrys) {
    // 排除掉函数
    if (typeof a !== "object" || typeof b !== "object") return false;
  }
  if (areArrys) {
    // a、b都是数组
    // 先通过比较数组的长度来浅层次的比较两个数组是否相等
    let length = a.length;
    if (length !== b.length) return false;
    while (length--) {
      if (!equal(a[length], b[length])) return false;
    }
  } else {
    const keys = objKeys(a);
    const length = keys.length;
    // 先通过比较两个对象的keys数组的长度来浅层次比较是否相等
    // 如果相等的话，他们的可枚举自身键值对数量肯定是相同的
    if (length !== objKeys(b).length) return false;

    for (let index = 0; index < length; index++) {
      const key = keys[index];
      if (!equal(a[key], b[key])) return false;
    }
  }

  // 如果数组和对象中只要有一项不相等，那么他们就是不相等的
  // 只有全部下标或者属性遍历完之后才是真正的相等
  return true;
}
