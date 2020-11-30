// partial偏函数
// 柯里化是将一个n个参数的函数转换成n个一个参数的函数
// partial是将一个有n个参数的函数转换为一个n-x参数的函数
// partial还可以用占位符_
import { _ } from "../../utils";
import restArgs from "../../restArgs/src";
// export default function partial(fn, ...boundArgs) {
//   return function (...args) {
//     let pos = 0;
//     const length = boundArgs.length;
//     const finalArgs = [];
//     for (let index = 0; index < length; index++) {
//       finalArgs[index] =
//         boundArgs[index] === _ ? args[pos++] : boundArgs[index];
//     }
//     while (pos < args.length) finalArgs.push(args[pos++]);
//     return fn.call(this, ...finalArgs);
//   };
// }

export default restArgs(function (fn, boundArgs) {
  return restArgs(function (args) {
    // 因为有占位符的存在，所以需要分两次填充最终参数
    let pos = 0;
    const length = boundArgs.length;
    const finalArgs = [];
    // 第一次填充，将占位符取出，用args来覆盖，维护args的下标
    for (let index = 0; index < length; index++) {
      finalArgs[index] =
        boundArgs[index] === _ ? args[pos++] : boundArgs[index];
    }
    // 第二次填充，boundArgs循环完毕之后若args还未取完，则继续获取args的值填充到最终参数里面
    while (pos < args.length) finalArgs.push(args[pos++]);
    return fn.call(this, ...finalArgs);
  });
});
