import { cb } from "../../base";
import _keys from "../keys";
const _findKey = function (obj, predicate, context) {
  predicate = cb(predicate, context);
  const keys = _keys(obj);
  const length = keys.length;

  for (let index = 0; index < length; index++) {
    const currentKey = keys[index];
    if (predicate(obj[currentKey], currentKey, obj)) {
      return currentKey;
    }
  }
};

export default _findKey;
