// 保存常用的原型引用，避免查找的开销
const AryProto = Array.prototype,
  ObjProto = Object.prototype;

// 保存常用方法的引用，避免查找时的开销
export const push = AryProto.push,
  slice = AryProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty;

// 保存一些es5常用方法的引用
export const nativeCreate = Object.create,
  nativeIsArray = Array.isArray,
  nativeKeys = Object.keys;

// 用于对象的创建
export function Ctor() {}

// 用于为空值赋值
export function noop() {}

// _([1,2,3]) 执行的时候
// 进入return new _(obj)
// 此时this instanceof _ 为true
// 将data保存在实例的wrapped属性上面
// 支持面向对象的风格
export const _ = function (obj) {
  if (!(this instanceof _)) return new _(obj);
  this.wrapped = obj;
};

_.placeholder = _;
export function optimizeCb(func, context) {
  if (context == null) return func;
  return function () {
    return func.apply(context, arguments);
  };
}

export function baseCreate(proto) {
  if (!_isObject(proto)) return {};
  if (nativeCreate) {
    return nativeCreate(proto);
  }
  Ctor.prototype = proto;
  const result = new Ctor();
  Ctor.prototype = null;
  return result;
}

export const keyInObj = function (value, key, obj) {
  return key in obj;
};

export function _random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

let builtInIteratee;

export const _isObject = function (value) {
  return typeof value === "function" || (typeof value === "object" && value);
};

export const _isFunction = function (value) {
  return typeof value === "function";
};

export const _has = function (obj, key) {
  return obj !== null && hasOwnProperty.call(obj, key);
};

// 返回自身的函数
// 结合cb函数一起用
export const _identity = function (value) {
  return value;
};
export const _iteratee = (builtInIteratee = function (value, context) {
  return cb(value, context);
});

export const _property = function (key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
};

export const _isArray = function (ary) {
  return nativeIsArray
    ? nativeIsArray(ary)
    : toString.call(ary) === "[object Array]";
};

export function restArgs(func) {
  if (typeof func !== "function") {
    throw new TypeError("restArgs must be called on Function");
  }
  return function () {
    let args = slice.call(arguments);
    const startIndex = func.length - 1;
    const rest = args.slice(startIndex);
    args = args.slice(0, startIndex);
    args[startIndex] = rest;
    // 将上下文和参数透传
    return func.apply(this, args);
  };
}

export const _isBoolean = function (value) {
  return toString.call(value) === "[object Boolean]";
};

export const executeBound = function (
  sourceFn,
  boundFn,
  context,
  callingContext,
  args
) {
  if (!(callingContext instanceof boundFn)) {
    return sourceFn.apply(context, args);
  }

  const self = baseCreate(sourceFn.prototype);
  const result = sourceFn.apply(self, args);
  return _isObject(result) ? result : self;
};

export const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

export const getLength = _property("length");

export const isArrayLike = function (obj) {
  const length = getLength(obj);
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};

export const cb = function (value, context) {
  // 如果是
  if (_iteratee !== builtInIteratee) {
    return _iteratee(value, context);
  }
  if (value == null) return _identity;
  if (_isFunction(value)) return optimizeCb(value, context);
  return _property(value);
};

for (const key of [
  "Arguments",
  "Function",
  "String",
  "Number",
  "Date",
  "RegExp",
  "Error",
  "Symbol",
  "Map",
  "WeakMap",
  "Set",
  "WeakSet"
]) {
  _["is" + key] = function (obj) {
    return toString.call(obj) === "[object " + key + "]";
  };
}

export const underscore = _;
