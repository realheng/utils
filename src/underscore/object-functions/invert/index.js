import _keys from "../../object-functions";

const _invert = function (obj) {
  const keys = _keys(obj);
  const result = {};

  for (let index = 0; index < keys.length; index++) {
    const currentKey = keys[index];
    result[obj[currentKey]] = currentKey;
  }
  return result;
};

export default _invert;
