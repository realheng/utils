import _findIndex from "../../array-functions/findIndex";
import _findKey from "../../object-functions/findKey";
import { isArrayLike } from "../../base";

const _find = function (obj, predicate, context) {
  const keyFinder = isArrayLike(obj) ? _findIndex : _findKey;
  const key = keyFinder(obj, predicate, context);
  if (key != null && key !== -1) {
    return obj[key];
  }
};

export default _find;
