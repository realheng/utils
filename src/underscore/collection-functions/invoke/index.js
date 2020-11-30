import { restArgs, _isFunction } from "../../base";
import _map from "../map";
const _invoke = restArgs(function (obj, method, args) {
  const isFunc = _isFunction(method);
  return _map(obj, function (value) {
    const func = isFunc ? method : value[method];
    return func == null ? func : func.apply(value, args);
  });
});

export default _invoke;
