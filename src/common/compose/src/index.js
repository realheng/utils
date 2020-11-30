export function compose(fns) {
  if (!Array.isArray(fns)) return;
  if (!fns.length) return;
  if (fns.length <= 1) return fns[0];

  // 如果fns = [fn1, fn2, fn3, fn4]
  // 第一次执行 compsedFn1 = (...args1)=> fn2(fn1(...args1))
  // 第二次执行 compsedFn2 = (...args2) => fn3(compsedFn1(...args2))
  // 第三次执行 compsedFn3 = (...args3) => fn4(compsedFn2(...args3))
  // 第四次执行 compsedFn4 = (...args4) => fn5(compsedFn3(...args4))

  // composedFn4(arg) => ((...args4) => fn5(compsedFn3(...args4)))(arg)
  // => fn5(compsedFn3(...args)
  // => fn5()
  // 返回的结果就是 (...args)=>f4(fn3(fn2(fn1(...args))))

  // 通过闭包将fns的元素一层层包裹起来，包裹起来的之后的函数就是composedFn
  // composedFn(arg)执行，composed才会一层层的解开

  // 从右往左执行
  // 如果fns = [fn1, fn2, fn3, fn4]
  // composedFn1 = (...args1) => f1(f2(...args1))
  // composedFn2 = (...args2) => composedFn1(fn3(...args2))
  // => (...args2)=>((...args1)=>f1(f2(...args1)))(fn3(...args2))
  // => (...args2)=>f1(f2(fn3(...args2)))
  // 以此类推，最后函数真正执行的时候是从右往左执行的
  return fns.reduce((composedFn, fn) => {
    return (...args) => composedFn(fn(...args));
  });
}
