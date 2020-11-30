import { getLength, slice } from "../../base";
import _isNaN from "../../object-functions/isNaN";
const createIndexFinder = function (dir, predicateFind, sortedIndex) {
  return function (ary, item, idx) {
    let start = 0;
    let length = getLength(ary);
    // 如果idx是数字
    // 表明要重置查询的其起始位置
    if (typeof idx === "number") {
      // 表明是正向查找
      if (dir > 0) {
        // 我们要做的就是将循环范围限定在0~length-1 之间
        start = idx >= 0 ? idx : Math.max(idx + length, 0);
      } else {
        // 从右往左查时需要重置的是length属性
        // 此时的idx如果为负数，说明的是从倒数第几个开始查
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      // 进入这个判断就说明idx为true即这个数组是一个有序数组，可以启用快速查找

      // 查找出item应该插入在ary中的下标
      idx = sortedIndex(ary, item);
      return ary[idx] === item ? idx : -1;
    }

    // 执行到这里说明idx既不是数字也不是true
    // 执行===匹配
    // 在此之前要先过滤掉NaN，排除干扰

    if (item !== item) {
      idx = predicateFind(slice.call(ary, start, length), _isNaN);
      // 如果查找时负方向的，得到的idx也是从左往右数的第几个
      // 所以处理正负向查找对应的idx都加上start就可以了
      return idx >= 0 ? idx + start : -1;
    }
    // 排除掉NaN的干扰过后就可以放心大胆的用===来进行判断

    // 根据查询方向来重置起始位置
    for (
      idx = dir > 0 ? start : length - 1;
      idx >= 0 && idx < length;
      idx += dir
    ) {
      if (ary[idx] === item) return idx;
    }
    return -1;
  };
};

export default createIndexFinder;
