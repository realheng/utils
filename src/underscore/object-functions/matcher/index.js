import _extend from "../extend";
import _isMatch from "../isMatch";

/**
 * 返回一个函数用于检测对象是否具有指定属性
 * @param {object} attrs 属性集合
 */

const _matcher = function (attrs) {
  attrs = _extend({}, attrs);
  return function (obj) {
    return _isMatch(obj, attrs);
  };
};

export default _matcher;
