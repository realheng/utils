// 这一节做了三件事
// 第一个是获取全局对象root，将_挂载到全局对象上面
// 要区别在window中和node中
// 第二个是支持函数式写法和面向对象写法，也就是将静态方法混入到原型中
// 混入到原型上的方法是经过重写的，而不是单纯的赋值就完事

(function () {
  // 在这段代码中，我们判断了window和node环境，获取全局对象
  const root =
    (typeof window === "object" && window.window === window && window) ||
    (typeof global === "object" && global.global === global && global);
  // _([1,2,3]).each(...)是如何实现的呢
  // _(obj)会返回一个_的实例对象obj
  // 实例对象obj的wrapped对象就是传入进去的值
  // 但是我们还需要一个方法将_上的静态方法复制到原型上，这样_的实例就可以使用了

  const ArrayProto = Array.prototype;
  const push = ArrayProto.push;
  const _ = function (obj) {
    if (!(this instanceof _)) return new _(obj);
    this.wrapped = obj;
  };

  _.VERSION = "0.1";

  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  // 为了支持模块化，我们需要将_导出
  // 分为node环境中导出和window环境中导出

  // 判断是否在node环境或者模块化中
  // 如果浏览器中有一个id为exports或者moudle的节点，那么exports !== 'undefined' 或者module !== 'undefined'
  if (typeof exports !== "undefined" && !exports.nodeType) {
    if (typeof module !== "undefined" && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  _.isFunction = function (value) {
    return typeof value === "function";
  };

  // 用来获取一个对象身上的方法名
  _.functions = function (obj) {
    const names = [];
    for (let key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // 将传入对象的方法混入_
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      const func = (_[name] = obj[name]);
      // 重新定义了方法，而不是直接将方法赋值
      _.prototype[name] = function (...args) {
        args.unshift(this.wrapped);
        // 执行的时候还是用的静态方法，只是将实例对象上的值取了出来作为第一个参数
        return func.call(_, ...args);
      };
    });
  };
  // 我们将所有的方法添加到一个名为_的对象上，然后将该对象挂在到全局对象上
  // 之所以不直接window._ = _，是因为我们写的是一个工具函数库，不仅要求可以运行在浏览器端
  // 还可以运行在诸如Node等环境中
  root._ = _;
  _.reverse = function (str) {
    return str.split("").reverse().join("");
  };
})();
