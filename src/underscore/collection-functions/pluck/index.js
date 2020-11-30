import { _property } from "../../base";
import _map from "../map";
const _pluck = function (obj, key) {
  return _map(obj, _property(key));
};

export default _pluck;
