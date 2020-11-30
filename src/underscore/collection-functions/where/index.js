import _filter from "../filter";
import _matcher from "../../object-functions/matcher";
const _where = function (obj, attrs) {
  return _filter(obj, _matcher(attrs));
};

export default _where;
