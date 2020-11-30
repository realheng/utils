const _ = function (data) {
  if (!(this instanceof _)) return new _(data);
  this.wrapped = data;
};

_.map = function (ary, iteratee) {
  const results = [];
  for (let index = 0; index < ary.length; index++) {
    const value = ary[index];
    results[index] = iteratee(value, index, ary);
  }
  return results;
};

_.chain = function (data) {
  const instance = _(data);
  instance._chain = true;
  return instance;
};

// 实例默认不开启链式调用
// 如果开启了的话那么就会一直调用下去
// 所以需要一个函数来判断实例是否启用链式调用
const chainResult = function (instance, data) {
  return instance._chain ? _.chain(data) : data;
};

_.isFunction = function (value) {
  return typeof value === "function";
};

_.functions = function (obj) {
  const names = [];
  for (const key in obj) {
    if (_.isFunction(obj[key])) {
      names.push(key);
    }
  }
  return names.sort();
};

// 启用链式调用的实例返回值都是经过包裹的
// 所以需要一个实例方法进行解封，将数据取出来
_.prototype.value = function () {
  return this.wrapped;
};

_.mixin = function (obj) {
  const funcNames = _.functions(obj);
  for (let index = 0; index < funcNames.length; index++) {
    const name = funcNames[index];
    const func = (_[name] = obj[name]);
    _.prototype[name] = function (...callingArgs) {
      const args = [this.wrapped, ...callingArgs];
      // 因为函数式用法里面第一个参数都是data
      // OOP执行方法的时候其实都是用原始方法，把实例的wrapped取出来
      return chainResult(this, func.call(_, ...args));
    };
  }
};

_.mixin(_);

export default _;
