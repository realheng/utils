// 链式调用
// underscore默认不开启链式调用

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
  const _ = function (value) {
    if (!(this instanceof _)) return new _(value);
    this.wrapped = value;
  };

  // 返回一个实例，并且将实例的chain属性赋值为true
  // chain被实例调用和被普通调用的结果都是一样的，因为没有判断this
  _.chain = function (value) {
    var instance = _(value);
    instance._chain = true;
    return instance;
  };

  // 这是一个内部使用的辅助函数
  // 用来判断实例是否开启了链式调用
  // 如果开启了链式调用，那么每次都返回开启链式调用的实例
  // 这个方法只能在实例方法里面使用
  const chainResult = function (instance, value) {
    // 因为underscore默认不开启链式调用
    // 如果实例的_chain属性不存在，那么就直接返回wrapped
    // 如果实例的_chain为true，，并且将实例的_chain设置为true
    return instance._chain ? _.chain(value) : value;
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

  _.prototype.value = function () {
    // 由于链式调用开启后每次返回的都是underscore的实例
    // 所以如果想取到实例上包裹的值，那么就需要一个方法来返回值
    return this.wrapped;
  };

  // 将传入对象的方法混入underscore
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      const func = (_[name] = obj[name]);
      // 重新定义了方法，而不是直接将方法赋值
      _.prototype[name] = function (...args) {
        // 实例上的方法执行时都会取wrapped作为第一个值，将其和传入的参数拼接起来
        args.unshift(this.wrapped);
        return chainResult(this, func.call(_, ...args));
      };
    });
    return _;
  };
  // 我们将所有的方法添加到一个名为_的对象上，然后将该对象挂在到全局对象上
  // 之所以不直接window._ = _，是因为我们写的是一个工具函数库，不仅要求可以运行在浏览器端
  // 还可以运行在诸如Node等环境中
  root._ = _;
  _.reverse = function (str) {
    return str.split("").reverse().join("");
  };
})();
