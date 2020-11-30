// 函数节流使得连续的函数频繁执行变成固定时间内只执行一次
// 大概有两种方式
// 1、记录时间戳，每次触发回调的时候就用当前时间戳和上次执行的时间戳做比较，判断是否已经到达触发事件点
// 如果已经到达触发点，那么就执行回调函数，并且更新时间戳
// 2、用定时器，定时器的回调里面有timeout = null清空定时器变量的语句和执行回调，每次触发函数的时候通过查看timeout是否存在来判断是否可以触发事件

// underscore里的实现了可以通过配置来实现是否需要相应事件刚开始的那次回调，以及事件结束后的那次回调

// 时间戳的方法
// 到点就可以执行
export function throttle1(func, wait) {
  let previous = 0;
  return function (...args) {
    const now = +new Date();
    const context = this;
    if (now - previous >= wait) {
      func.call(context, ...args);
      previous = now;
    }
  };
}

// 定时器方法
// timeout为空时延迟执行，延迟执行函数里面会清空timeout，方便之后重新触发延迟执行
export function throttle2(func, wait) {
  let timeout = null;

  return function (...args) {
    const context = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(context, ...args);
        timeout = null;
      }, wait);
    }
  };
}

// 二者合璧
// 就是说当可以触发的时间可以立即触发
// 如果timeout为空，也可以延迟触发

export function throttle(func, wait, options) {
  let timeout = null,
    previous = 0,
    args,
    context;
  options = options == null ? {} : options;
  const later = function () {
    // 能进入这个回调说明延迟执行函数开启了
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    func.call(context, ...args);
    if (!timeout) context = args = null;
  };

  const throttled = function () {
    args = [].slice.call(arguments);
    context = this;
    const now = +new Date();
    if (!previous && options.leading === false) previous = now;

    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      // 到触发点了，但是延时函数未按时执行
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.call(context, ...args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, wait);
    }
  };

  return throttled;
}
