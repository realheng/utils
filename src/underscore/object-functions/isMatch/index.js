import _keys from "../keys";

// 用于判断attrs的键值对是否和obj匹配
const _isMatch = function (obj, attrs) {
  const keys = _keys(attrs),
    length = keys.length;
  if (obj == null) return !length;

  for (let index = 0; index < length; index++) {
    const key = keys[index];
    // 只要两个对象的值不相等，那么就立即返回false
    // 如果两个对象的值相等，且obj中不存在，原型链中也不存在时（只有undefined的情况吧），也返回false
    // 这里用的是全等，不能深层次的比较两个对象的是否相等
    if (attrs[key] !== obj[key] || !(key in obj)) {
      return false;
    }
  }
  return true;
};

export default _isMatch;
