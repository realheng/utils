import _keys from "../../object-functions/keys";

const _pairs = function (obj) {
  const result = [];
  const keys = _keys(obj);
  const length = keys.length;
  for (let index = 0; index < length; index++) {
    const key = keys[index];
    result[index] = [key, obj[key]];
  }
  return result;
};

export default _pairs;
