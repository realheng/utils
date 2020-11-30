import { _isObject, _isArray } from "../../base";
import _extend from "../extend";
// 浅克隆一个对象
const _clone = function (obj) {
  if (!_isObject(obj)) return obj;
  return _isArray(obj) ? obj.concat() : _extend({}, obj);
};

export default _clone;
