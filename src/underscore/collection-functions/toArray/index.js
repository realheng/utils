import { _isArray, slice, isArrayLike, _identity } from "../../base";
import _map from "../map";
import _values from "../../object-functions/values";

const _toArray = function (obj) {
  if (_isArray(obj)) return slice.call(obj);
  if (isArrayLike(obj)) return _map(obj, _identity);
  return _values(obj);
};

export default _toArray;
