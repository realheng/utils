// 这是一个比较典型的闭包
// 接收一个函数fn1并且返回一个函数fn2
// fn2执行的时候fn1也要执行，并且需要透传context、args，记得return
const _negate = function (func) {
  if (typeof func !== "function")
    throw new TypeError("_negate must be called on function");
  return function () {
    // 闭包保存函数三要素
    // context:this args:arguments 返回值 return
    return !func.apply(this, arguments);
  };
};

export default _negate;
