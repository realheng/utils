// shallow true + strict false ：数组子元素扒一层皮，保留非数组
// shallow false + strict false ：数组子元素扒光皮，保留非数组
// shallow true + strict true ：数组子元素扒一层皮，去掉非数组子元素
// shallow false + strict true ： 返回一个[]
export default function flatten(input, shallow, strict, startIndex) {
  // flatten是对子元素进行操作，并且返回一个数组
  // 因为数组需要展开
  // 所以需要用变量idx来维护output下标

  const output = [];
  let idx = 0;

  for (
    let index = startIndex || 0, length = input.length;
    index < length;
    index++
  ) {
    let curItem = input[index];
    if (Array.isArray(curItem)) {
      if (!shallow) {
        // 当深度扒皮时，返回值也是个一维数组
        curItem = flatten(curItem, shallow, strict);
      }

      let j = 0;
      const len = curItem.length;
      while (j < len) {
        output[idx++] = curItem[j++];
      }
    } else if (!strict) {
      // 严格模式下会忽略掉非数组元素
      output[idx++] = curItem;
    }
  }
  return output;
}

var arr = [1, [2, [3, 4]]];

export function flatten2(arr) {
  if (!Array.isArray(flatten2) || !arr.length) return [];
  return arr.reduce(function (flattened, next) {
    return flattened.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

console.log(flatten(arr));
