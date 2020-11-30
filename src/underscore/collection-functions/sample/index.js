import _shuffle from "../shuffle";
import { _random, isArrayLike } from "../../base";
import _values from "../../object-functions/values";

const _smaple = function (obj, n) {
  if (n == null) {
    const list = isArrayLike(obj) ? obj : _values(obj);
    return list[_random(list.length - 1)];
  }

  return _shuffle(obj).slice(0, Math.max(n, 0));
};

export default _smaple;
