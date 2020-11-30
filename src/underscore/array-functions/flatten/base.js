/**
 *
 * @param {array} input 待平铺对象
 * @param {boolean} shallow 是否只平铺一层
 * @param {boolean} strict 是否过滤掉非数组元素
 * @param {array} output 输出数组
 */

// flatten是数组的对子元素进行操作
// true false 平铺第一层数组子元素
// true true 空数组
// false false 全部平铺
// false true 过滤掉非数组元素
import { getLength, _isArray } from "../../base";
const flatten = function (input, shallow, strict, output) {
  output = output || [];
  let idx = output.length;
  if (!_isArray(input)) return [];
  const length = input.length;
  for (let index = 0; index < length; index++) {
    const value = input[index];
    if (_isArray(value)) {
      if (shallow) {
        let j = 0;
        const l = value.length;
        while (j < l) output[idx++] = value[j++];
      } else {
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
};

export default flatten;
