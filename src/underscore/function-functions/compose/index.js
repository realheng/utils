import { restArgs, _identity } from "../../base";
import { _reducerRight } from "../../collection-functions/reduce";

const _compose = restArgs(function (fns) {
  if (fns.length < 1) return _identity;
  if (fns.length === 1) return fns[0];
  const context = this;

  // composedFn2 = (args1) => fn2.call(context, composedFn1.aplly(context, args1));
  // composedFn3 = (args2) => fn3.call(conrext, composedFn2.apply(context, args2));

  // reduce的作用就是将一个数组转成一个值
  // 这个值可以是任何值，取决于你的想象力
  // 在compsoe里面这个值就是函数
  // 函数2里面包含函数1
  // 最后返回的也是一个函数，只是作用域链比较长
  return _reducerRight(fns, function (composedFn, fn) {
    return restArgs(function (args) {
      return fn.call(context, composedFn.apply(context, args));
    });
  });
});

export default _compose;
