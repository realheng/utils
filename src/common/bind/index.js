import restArgs from "../restArgs/src";
import { isFunction, create } from "../utils";

export default restArgs(function bind(func, context, boundArgs) {
  if (!isFunction(func)) throw new Error("bind must be called on a function ");
  const bound = restArgs(function (callArgs) {
    const finalArgs = boundArgs.concat(callArgs);
    // 如果this是bound的实例，那么函数执行时的上下文就用this
    return func.apply(this instanceof bound ? this : context, finalArgs);
  });
  bound.prototype = create(func.prototype);
  return bound;
});
