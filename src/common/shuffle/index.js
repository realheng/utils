// 洗牌算法的核心思想就是循环一个数组
// 每次循环都取一个随机数，将当前循环下标index和随机下标rand的值做交换
// 一般采用从后往前的循环
// underscore采用的是从前往后的循环

import { isArrayLike, _ } from "../utils";

export function shuffle1(ary) {
  const output = [];
  ary = ary.concat();
  while (ary.length) {
    const index = Math.floor(Math.random() * ary.length);
    output.push(ary[index]);
    ary.splice(index, 1);
  }

  return output;
}

export default function shuffle2(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

export const shuffle = function (obj) {
  var set = isArrayLike(obj) ? obj : _.values(obj);
  var length = set.length;
  var shuffled = Array(length);
  for (var index = 0, rand; index < length; index++) {
    rand = _.random(0, index);
    // rand === index的时候shuffled[rand]为undefined
    if (rand !== index) shuffled[index] = shuffled[rand];
    shuffled[rand] = set[index];
  }
  return shuffled;
};
