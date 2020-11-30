import { cb, getLength } from "../../base";

const createPredicateIndexFinder = function (dir) {
  return function (ary, predicate, context) {
    predicate = cb(predicate, context);
    const length = getLength(ary);
    let index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(ary[index], index, ary)) {
        return index;
      }
    }
    return -1;
  };
};

export default createPredicateIndexFinder;
