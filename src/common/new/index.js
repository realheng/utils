// 自己实现一个new
export default function myNew(Constructor, ...args) {
  const obj = {};
  if (typeof Constructor !== "function") {
    throw new Error("myNew must be passed with Function");
  }
  obj.__proto__ = Constructor.prototype;
  const result = Constructor.call(obj, ...args);
  return typeof result === "object" && result ? result : obj;
}
