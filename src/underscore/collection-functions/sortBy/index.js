import { cb } from "../../base";
import _map from "../../collection-functions/map";
import _pluck from "../../collection-functions/pluck";
const _sortBy = function (obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  return _pluck(
    _map(obj, function (value, index) {
      return {
        value,
        index,
        criteira: iteratee(value)
      };
    }).sort((left, right) => {
      const l = left.criteira;
      const r = right.criteira;
      if (l !== r) {
        if (l < r || r == null) return -1;
        if (l > r || l == null) return 1;
      }
      return left.index - right.index;
    }),
    "value"
  );
};

export default _sortBy;
