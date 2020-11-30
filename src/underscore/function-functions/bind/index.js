import { executeBound, restArgs, _isFunction } from "../../base";

const _bind = restArgs(function (func, context, boundArgs) {
  if (!_isFunction(func))
    throw new TypeError("bind must be called on a function");
  context = context || window;
  const bound = restArgs(function (callingArgs) {
    return executeBound(
      func,
      bound,
      context,
      this,
      boundArgs.concat(callingArgs)
    );
  });

  return bound;
});

export default _bind;
