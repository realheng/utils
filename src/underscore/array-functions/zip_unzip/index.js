import { _max } from "../../collection-functions/max_min";
import { getLength, restArgs } from "../../base";
import _pluck from "../../collection-functions/pluck";
const _unzip = function (array) {
  // 获取数组里面长度最长的元素
  const length = (array && _max(array, getLength)).length || 0;
  const result = Array(length);

  for (let index = 0; index < length; index++) {
    result[index] = _pluck(array, index);
  }

  return result;
};

const _zip = restArgs(_unzip);

export { _zip, _unzip };
