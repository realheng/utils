// 用es5的方法来实现剩余参数的特性
// 如果不使用 ... 拓展操作符，仅用 ES5 的内容，该怎么实现呢？
// 我们可以写一个 restArgs 函数，传入一个函数，使用函数的最后一个参数储存剩下的函数参数，使用效果如下：

// var func = restArgs(function(a, b, c){
//     console.log(c); // [3, 4, 5]
// })

// func(1, 2, 3, 4, 5)

// 用es5方法来实现es6函数的剩余参数功能，
// 将传入的多余参数添加到函数的最后一个形参，是一个数组
export default function restArgs(func) {
  if (typeof func !== "function") {
    throw new Error("restArgs must be passed with function!");
  }
  return function () {
    // 剩余参数的起始位置
    const startIndex = func.length - 1;
    let args = [].slice.call(arguments);
    // 取出剩余参数
    const restArgs = args.slice(startIndex);
    // 截取剩余参数之前的参数列表
    args = args.slice(0, startIndex);
    // 拼接起来
    // 用args[startIndex] = restArgs赋值而不是push的原因在于可能真实参数的个数不够
    // 如果直接push会导致参数位置错误
    args[startIndex] = restArgs;
    // 要返回原始函数的执行结果
    // 重置this
    // 传入参数
    return func.apply(this, args);
  };
}
