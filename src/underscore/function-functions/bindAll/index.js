import { restArgs } from "../../base";
import { flatten } from "../../array-functions/flatten";
import _bind from "../bind";
const _bindAll = restArgs(function (obj, keys) {
  if (obj == null) return;
  keys = flatten(keys, false, false);
  let index = keys.length;
  if (index < 1) throw new Error("bindAll must be passed by function names");
  while (index--) {
    const key = keys[index];
    obj[key] = _bind(obj[key], obj);
  }
});

export default _bindAll;
