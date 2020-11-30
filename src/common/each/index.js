import { isArrayLike, trans2func, objKeys } from "../utils";

// 这个函数只针对obj是类数组和对象
export default function each(obj, iteratee, context) {
  iteratee = trans2func(iteratee, context);
  // 我们想对类数组和对象都用一个循环来处理，那么就要对keys和length做处理
  // 如果keys存在，那么就说明不是一个类数组
  // 对于一个对象来说key就是keys[index]
  // 对于一个数组来说key就是index
  const keys = !isArrayLike(obj) && objKeys(obj);
  const length = (keys || obj).length;
  for (let index = 0; index < length; index++) {
    const key = keys ? keys[index] : index;
    if (iteratee(obj[key], key, obj) === false) break;
  }
}
