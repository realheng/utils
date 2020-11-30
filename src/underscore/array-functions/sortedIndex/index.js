import { cb, getLength } from "../../base";

const sortedIndex = function (ary, obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  let low = 0,
    high = getLength(ary);
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (iteratee(ary[mid]) < obj) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

export default sortedIndex;
