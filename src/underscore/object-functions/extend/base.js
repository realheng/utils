import { restArgs } from "../../base";
// keysFunc表示用什么方法获取到对象的keys
// default:boolean 表示是否覆盖默认值
// createAssigner是浅度合并
const createAssigner = function (keysFunc, defaults) {
  return restArgs(function (target, sources) {
    const length = sources.length;
    if (length < 1 || target == null) return target;
    for (let index = 0; index < length; index++) {
      const source = sources[index];
      const keys = keysFunc(source);
      const keyLength = keys.length;
      for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        // 如果defaults为空或者false，那么!defaults为true，短路判断直接进入条件语句，覆盖target里的值
        // 如果是defaults为true，只有target[key]为undefined时才会覆盖
        if (!defaults || target[key] === void 0) {
          target[key] = source[key];
        }
      }
    }
    return target;
  });
};

export default createAssigner;
