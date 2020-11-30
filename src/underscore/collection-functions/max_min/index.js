import { cb } from "../../base";
import _each from "../each";
const _max = function (obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  let result = -Infinity,
    lastComputed = -Infinity;

  _each(obj, function (value) {
    const computed = iteratee(value);
    if (computed > lastComputed) {
      lastComputed = computed;
      result = value;
    }
  });
  return result;
};

const _min = function (obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  let result = Infinity,
    lastComputed = Infinity;

  _each(obj, function (value) {
    const computed = iteratee(value);
    if (computed < lastComputed) {
      lastComputed = computed;
      result = value;
    }
  });
  return result;
};

export { _min, _max };
