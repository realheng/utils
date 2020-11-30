import { slice, isArrayLike } from "../../base";

const _chunk = function (array, count) {
  const result = [];
  if (count == null || count < 1 || !isArrayLike(array)) {
    return [];
  }
  count = Math.floor(count);
  const length = array.length;
  let index = 0;
  while (index < length) {
    result.push(slice.call(array, index, (index += count)));
  }
  return result;
};

export default _chunk;
