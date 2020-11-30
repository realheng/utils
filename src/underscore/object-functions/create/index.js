import { baseCreate, _isObject } from "../../base";
import { _extendOwn } from "../extend";
const _create = function (proto, props) {
  const result = baseCreate(proto);
  if (_isObject(props)) {
    _extendOwn(result, props);
  }
  return result;
};

export default _create;
