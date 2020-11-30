import { _isFunction } from "../../base";

const _functions = function (obj) {
  const names = [];
  if (obj == null) return [];

  for (const key in obj) {
    if (_isFunction(obj[key])) {
      names.push(key);
    }
  }
  return names.sort();
};

export default _functions;
