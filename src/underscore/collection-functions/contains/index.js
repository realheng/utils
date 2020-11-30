import { isArrayLike } from "../../base";
import _values from "../../object-functions/values";
import _indexOf from "../../array-functions/indexOf";
const _contains = function (obj, item, fromIndex) {
  if (!isArrayLike(obj)) obj = _values(obj);
  return _indexOf(obj, item, fromIndex) >= 0;
};

export default _contains;
