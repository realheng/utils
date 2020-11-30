// 用闭包保存fn和args
// 当args的个数大于等于fn的形参个数时则执行fn
// 否则，则将args拼接起来，继续返回curry

export default function curry(fn, ...boundArgs) {
  return function (...args) {
    const context = this;
    const finalArgs = boundArgs.concat(args);
    if (finalArgs.length < fn.length) {
      return curry(fn, ...finalArgs);
    }
    return fn.call(context, ...finalArgs);
  };
}
