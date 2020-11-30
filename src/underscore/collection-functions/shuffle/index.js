import { isArrayLike, _random } from "../../base";
import _values from "../../object-functions/values";
const _shuffle = function (obj) {
  const list = isArrayLike(obj) ? obj : _values(obj);
  const result = [];
  const length = list.length;
  // 因为obj可能是一个类数组对象
  // 所以不能用数组的方法克隆出一个obj
  for (let index = 0; index < length; index++) {
    const random = _random(index);
    // 为什么不是result[random] = result[index]的原因是
    // result[index]一直都是undefined
    // random<=index，所以result[random]可以一直是有值的
    // 因为就算random===index,result[random]是无值的
    // 最后也会result[random] = list[index];
    result[index] = result[random];
    result[random] = list[index];
  }
  return result;
};

export default _shuffle;
