// 这个函数用来放一些简单的工具函数和变量
// 复杂一些的函数放在文件夹里面

export const hasOwn = Object.prototype.hasOwnProperty;
export const nativeKeys = Object.keys;

const nativeIsArray = Array.isArray;
export const slice = Array.prototype.slice;
const toString = Object.prototype.toString;
export function isFunction(value) {
  return typeof value === "function";
}

export function create(proto) {
  const FNoop = function () {};
  FNoop.prototype = proto;
  return new FNoop();
}

export function isArray(obj) {
  return nativeIsArray
    ? nativeIsArray(obj)
    : classType(obj) === "[object Array]";
}

export function isPlainObject(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    (obj.__proto__ === Object.prototype || !obj.__proto__)
  );
}

export function Ctor(){}

export function baseCreate(proto){

}

export function classType(obj) {
  return toString.call(obj);
}
const _ = {},
  underscore = _;

export { _, underscore };

export const MAX_SAFE_NUMBER = Math.pow(2, 53) - 1;

export function objKeys(obj) {
  const result = [];
  if (obj == null) return [];
  if (nativeKeys) return nativeKeys(obj);

  for (const key in obj) {
    if (objHas(obj, key)) {
      result.push(key);
    }
  }
  return result;
}

export function objHas(obj, key) {
  if (obj == null) return false;
  return hasOwn.call(obj, key);
}

export function allObjKeys(obj) {
  const result = [];
  if (obj == null) return [];
  if (nativeKeys) return nativeKeys(obj);

  for (const key in obj) {
    result.push(key);
  }
  return result;
}

// 用来获取对象的属性
export function property(name) {
  return function (obj) {
    if (obj == null) return;
    return obj[name];
  };
}

// 返回输入值的函数
export function identity(value) {
  return value;
}

// 将参数转换为函数
export function trans2func(value, context) {
  if (value == null) return identity;
  if (isFunction(value))
    return function (...args) {
      return value.call(context, ...args);
    };
}

export const getLength = property("length");

// 判断是否为一个类数组
export function isArrayLike(obj) {
  const length = getLength(obj);
  return typeof length === "number" && length >= 0 && length <= MAX_SAFE_NUMBER;
}
