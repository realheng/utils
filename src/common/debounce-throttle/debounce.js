// 防抖：一段时间(delay)内，如果函数重复触发的话，都不执行。
// 直到最后一次触发之后经过delay秒都不再触发函数的话，函数执行
// 防抖的侧重点在于只触发最后一次
// 技术点就是每次触发都会取消延迟函数，更新时间戳。
export function debounce1(fn, delay = 500) {
  let timeout = null;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this, ...args), delay);
  };
}

// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// 函数去抖（连续事件触发结束后只触发一次）
// sample 1: _.debounce(function(){}, 1000)
// 连续事件结束后的 1000ms 后触发
// sample 1: _.debounce(function(){}, 1000, true)
// 连续事件触发后立即触发（此时会忽略第二个参数）
export const debounce2 = function (func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function () {
    // 定时器设置的回调 later 方法的触发时间，和连续事件触发的最后一次时间戳的间隔
    // 如果间隔为 wait（或者刚好大于 wait），则触发事件
    var last = +new Date() - timestamp;

    // 时间间隔 last 在 [0, wait) 中
    // 还没到触发的点，则继续设置定时器
    // last 值应该不会小于 0 吧？
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      // 到了可以触发的时间点
      timeout = null;
      // 可以触发了
      // 并且不是设置为立即触发的
      // 因为如果是立即触发（callNow），也会进入这个回调中
      // 主要是为了将 timeout 值置为空，使之不影响下次连续事件的触发
      // 如果不是立即执行，随即执行 func 方法
      if (!immediate) {
        // 执行 func 函数
        result = func.apply(context, args);
        // 这里的 timeout 一定是 null 了吧
        // 感觉这个判断多余了
        if (!timeout) context = args = null;
      }
    }
  };

  // 嗯，闭包返回的函数，是可以传入参数的
  return function () {
    // 可以指定 this 指向
    context = this;
    args = arguments;

    // 每次触发函数，更新时间戳
    // later 方法中取 last 值时用到该变量
    // 判断距离上次触发事件是否已经过了 wait seconds 了
    // 即我们需要距离最后一次触发事件 wait seconds 后触发这个回调方法
    timestamp = +new Date();

    // 立即触发需要满足两个条件
    // immediate 参数为 true，并且 timeout 还没设置
    // immediate 参数为 true 是显而易见的
    // 如果去掉 !timeout 的条件，就会一直触发，而不是触发一次
    // 因为第一次触发后已经设置了 timeout，所以根据 timeout 是否为空可以判断是否是首次触发
    var callNow = immediate && !timeout;

    // 设置 wait seconds 后触发 later 方法
    // 无论是否 callNow（如果是 callNow，也进入 later 方法，去 later 方法中判断是否执行相应回调函数）
    // 在某一段的连续触发中，只会在第一次触发时进入这个 if 分支中
    if (!timeout)
      // 设置了 timeout，所以以后不会进入这个 if 分支了
      timeout = setTimeout(later, wait);

    // 如果是立即触发
    if (callNow) {
      // func 可能是有返回值的
      result = func.apply(context, args);
      // 解除引用
      context = args = null;
    }

    return result;
  };
};

export const debounce3 = function (func, wait, immediate) {
  let timeout = null;
  const debounced = function (...args) {
    const context = this;
    // 每次触发回调都重新设置定时器
    // 立即执行的定时器是用来清空timeout的，这样既能保证不频繁触发，又能保证正常运行
    // 延时行的定时器就是用来延迟执行的，每次触发回调都重新触发
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.call(context, ...args);
    } else {
      timeout = setTimeout(func.bind(context, ...args), wait);
    }
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

// debounce1和debounce3都会频繁触发回调和取消回调，而debounce2不会。所以debounce2的性能要好一点
// debounce的核心在于每次触发回调都会重置下次触发的时间
// 在debounce1和debounce3中重置的方法就是clearTiemout，每次都清空定时器
// 在debounce2中是刷新时间戳，然后回调函数later执行时会判断现在时间和时间戳里的时间
// 如果later执行时当前时间和时间戳的间隔小于wait，那么就再次setTimeout，间隔为wait-(now - previous )

// debounce2和debounce3里面都实现了立即执行
// 通过传入的immediate参数来判断是否启动立即执行
