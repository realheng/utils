import { _has, nativeKeys, _isObject } from "../../base";

const _keys = function (obj) {
  const result = [];
  if (obj == null) return [];
  if (nativeKeys) {
    return nativeKeys(obj);
  }
  for (const key in obj) {
    if (_has(obj, key)) {
      result.push(key);
    }
  }

  return result;
};

const _allKeys = function (obj) {
  const result = [];
  if (!_isObject(obj)) {
    return [];
  }
  for (const key in obj) {
    result.push(key);
  }
  return result;
};

export { _allKeys };

export default _keys;
