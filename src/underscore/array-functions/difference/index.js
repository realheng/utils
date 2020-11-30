import { flatten } from "../flatten";
import { restArgs } from "../../base";
import _filter from "../../collection-functions/filter";
import _contains from "../../collection-functions/contains";
const _difference = restArgs(function (ary, restAry) {
  // 展开剩余参数数组，过滤掉非数组元素
  restAry = flatten(restAry, true, true);
  return _filter(ary, function (value) {
    return !_contains(restAry, value);
  });
});

export default _difference;
