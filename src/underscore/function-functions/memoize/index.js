import { _has } from "../../base";

const _memoize = function (func, hasher) {
  const memoized = function (key) {
    const cache = memoized.cache;
    const address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!_has(cache, address)) {
      cache[address] = func.apply(this, arguments);
    }
    return cache[address];
  };

  memoized.cache = {};
  return memoized;
};

export default _memoize;
