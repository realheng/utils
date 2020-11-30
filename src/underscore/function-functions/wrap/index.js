import _partial from "../partial";

const _wrap = function (func, wrapper) {
  return _partial(wrapper, func);
};

export default _wrap;
