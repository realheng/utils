import _keys from "../keys";

// 将对象的值转换为数组
const _values = function (obj) {
  const keys = _keys(obj);
  const result = [];

  for (let index = 0; index < keys.length; index++) {
    result.push(obj[keys[index]]);
  }
  return result;
};

export default _values;
