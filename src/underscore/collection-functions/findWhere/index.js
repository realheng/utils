import _find from "../find";
import _matcher from "../../object-functions/matcher";
const _findWhere = function (obj, attrs) {
  return _find(obj, _matcher(attrs));
};

export default _findWhere;
