import { restArgs, isArrayLike } from "../../base";
import _contains from "../../collection-functions/contains";

const _intersection = restArgs(function (array, otherArrays) {
  const result = [];
  if (!isArrayLike(array)) return [];
  if (!otherArrays.length) {
    return array.concat();
  }
  const length = array.length;
  for (let index = 0; index < length; index++) {
    const item = array[index];
    // 因为求交集数组的肯定是去重的
    // 所以如果result里面已经存在了，那么就跳过
    if (_contains(result, item)) {
      continue;
    }
    let j = 0;
    for (; j < otherArrays.length; j++) {
      if (!_contains(otherArrays[j], item)) break;
    }
    // 只有otherArrays子元素都存在item，才能push
    if (j >= otherArrays.length) {
      result.push(item);
    }
  }
  return result;
});

export default _intersection;
