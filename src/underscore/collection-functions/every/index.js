import { isArrayLike, cb } from "../../base";
import _keys from "../../object-functions/keys";
const _every = function (obj, predicate, context) {
  predicate = cb(predicate, context);
  const keys = !isArrayLike(obj) && _keys(obj);
  const length = (keys || obj).length;

  for (let index = 0; index < length; index++) {
    const currentKey = keys ? keys[index] : index;
    const item = obj[currentKey];
    // 一旦函数没有通过真值检测，就返回false
    if (!predicate(item, currentKey, obj)) {
      return false;
    }
  }
  // 全部通过 返回true
  return true;
};

export default _every;
