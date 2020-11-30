import { _isBoolean, cb, getLength } from "../../base";
import _contains from "../../collection-functions/contains";
/**
 *
 * @param {array} array 待去重数组
 * @param {*} isSorted 是否有序
 * @param {*} iteratee 计算函数
 * @param {*} context 函数上下文
 */
const _unique = function (array, isSorted, iteratee, context) {
  if (!_isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  iteratee = cb(iteratee, context);
  const result = [];
  // 这个变量有两个作用
  // 如果是有序的话，那么就当做上一次的值
  // 如果不是有序的话，那么就用作出现过的元素数组
  let seen = [];
  const length = getLength(array);
  for (let index = 0; index < length; index++) {
    const value = array[index];
    const computed = iteratee(value);
    if (isSorted) {
      // 因为如果是有序的话，只用判断相邻的两个元素是否相等就可以判断是否重复
      if (!index || seen !== computed) result.push(value);
      // 每次都刷新上一次的值
      seen = computed;
    } else {
      // 如果不是有序的数组
      if (!_contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    }
  }

  return result;
};

export default _unique;
