// 介绍两个在数组中查找元素的方法
// 第一种方法是根据传入的函数执行结果为true返回index，都为false则返回-1
// 第二种方法是判断传入的obj是否在数组中，如果在数组中则返回index，否则返回-1
// 因为是在数组中，所以可以正向查找和负向查找

// var arr = [1, 3, 5, 2, 4, 6];
// var isEven = function(num) {
//   return !(num & 1);
// };
// var idx = _.findIndex(arr, isEven);
//  => 3

export function createPredicateIndexFinder(dir) {
  return function (arr, predicate, context) {
    const length = arr.length;
    let index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, arr[index], index, arr)) return index;
    }
    return -1;
  };
}

export const findIndex = createPredicateIndexFinder(1);
export const findLastIndex = createPredicateIndexFinder(-1);

// 在一个从小到大有序排序的数组中返回obj应该插入位置的下标

export function sortedIndex(arr, obj) {
  let low = 0,
    high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < obj) low = mid + 1;
    else high = mid;
  }
  // 这里返回low和high没什么区别
  // 跳出循环的关键就是low>=high
  // mid一般都是>=low
  // high最小=low
  // low最大等于high
  return high;
}

export function createIndexOfFinder(dir, predicate, sortedIndex) {
  return function (array, item, idx) {
    var length = array.length;
    var i = 0;

    if (typeof idx === "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(length + idx, 0);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      // 如果该插入的位置的值正好等于元素的值，说明是第一个符合要求的值
      return array[idx] === item ? idx : -1;
    }

    // 判断是否是 NaN
    if (item !== item) {
      idx = predicate(array.slice(i, length), isNaN);
      return idx >= 0 ? idx + i : -1;
    }

    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

export const indexOf = createIndexOfFinder(1, findIndex, sortedIndex);
export const lastIndexOf = createIndexOfFinder(-1, findLastIndex);
