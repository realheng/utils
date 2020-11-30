// 数组去重
// 双重循环
// 对象键值对来去重
export function unique1(a) {
  const arr = [];
  for (const item of a) {
    if (arr.indexOf(a) === -1) {
      arr.push(item);
    }
  }
  return arr;
}

export function unique2(a) {
  return a.filter((item, idx) => a.indexOf(item) === idx);
}

export function unique(ary, isSorted, iteratee) {
  const res = [];
  let seen = [];
  for (let i = 0, len = ary.length; i < len; i++) {
    const curItem = ary[i];
    if (isSorted) {
      if (!i || seen !== curItem) {
        res.push(curItem);
      }
      seen = curItem;
    } else if (typeof iteratee === "function") {
      const computed = iteratee(curItem);
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        res.push(curItem);
      }
    } else if (res.indexOf(curItem) === -1) {
      res.push(curItem);
    }
  }
  return res;
}

var a = ["a", "c", "d", "D"];
var ans = unique(a, false, (value) => value.toLowerCase());
console.log(ans);
