import { restArgs } from "../../base";

// 节流的核心要点是回调执行了才重置时间
const _throttle = function (func, wait) {
  let timeout = null;
  return restArgs(function (args) {
    if (!timeout) {
      timeout = setTimeout(function () {
        func.apply(this, args);
        timeout = null;
      }, wait);
    }
  });
};

// 防抖的核心就是触发事件就重置时间
const _debounce = function (func, wait, immediate) {
  let timeout = null;
  return restArgs(function (args) {
    clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) return func.apply(this, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(this, args);
      }, wait);
    }
  });
};

export { _debounce, _throttle };
