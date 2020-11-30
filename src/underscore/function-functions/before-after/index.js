import { restArgs } from "../../base";

// 前times次调用会正常执行回调
// 超过tiems次之后就会用最后一次的执行结果
const _before = function (times, func) {
  let memo;
  return restArgs(function (args) {
    const context = this;
    if (--times > 0) {
      memo = func.apply(context, args);
    }

    return memo;
  });
};

// 执行times过后，每次调用都会执行回调函数
const _after = function (times, func) {
  return restArgs(function (args) {
    const context = this;
    if (--times < 1) {
      return func.apply(context, args);
    }
  });
};

export { _before, _after };
