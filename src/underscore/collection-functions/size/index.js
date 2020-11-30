const { default: _keys } = require("../../object-functions/keys");
const { isArrayLike } = require("../../base");

const _size = function (obj) {
  return isArrayLike(obj) ? obj.length : _keys(obj).length;
};

export default _size;
