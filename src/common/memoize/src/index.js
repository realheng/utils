// 实现一个记忆函数
// 核心就是通过闭包保存函数和hasher
// 如果通过hasher生成的key存在，就返回
// 如果不存在则设置就完事

export default function memoize(func, hasher) {
  const memoized = function (key) {
    const context = this;
    const cache = memoized.cache;
    const address =
      (typeof hasher === "function"
        ? hasher.apply(context, [].slice.call(arguments))
        : key) + "";

    if (!cache.hasOwnProperty(address)) {
      cache[address] = func.call(context, [].slice.call(arguments));
    }
    return cache[address];
  };

  memoized.cache = {};

  return memoized;
}
