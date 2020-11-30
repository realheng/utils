import { slice } from "../../base";

// 数组的元素截取有两种模式
// 1、slice.call(arry,0,n) 这种方式是从起始开始截取
// 2、slice.call(arry,n) 这种方式是从中间开始截取

// 返回剔除最后n个元素的所有元素
const _initial = function (array, n) {
  return slice.call(
    array,
    0,
    Math.max(0, array.length - (typeof n === "number" ? n : 1))
  );
};

// 返回数组的前n个元素，如果n没有传值的话就返回第一个
const _first = function (array, n) {
  if (array == null || array.length < 1) return undefined;
  if (n == null) return array[0];
  return _initial(array, array.length - n);
};

const _rest = function (array, n) {
  return slice.call(array, typeof n !== "number" ? 1 : n);
};

const _last = function (array, n) {
  if (array == null) return undefined;
  if (n == null) return array[0];
  return _rest(array, Math.max(0, array.length - n));
};

export { _last, _rest, _initial, _first };
