import { isArrayLike, cb } from "../../base";
import _keys from "../../object-functions/keys";
const _some = function (obj, predicate, context) {
  predicate = cb(predicate, context);
  const keys = !isArrayLike(obj) && _keys(obj);
  const length = (keys || obj).length;

  for (let index = 0; index < length; index++) {
    const currentKey = keys ? keys[index] : index;
    const item = obj[currentKey];
    if (predicate(item, currentKey, obj)) {
      return true;
    }
  }
  return false;
};

export default _some;
