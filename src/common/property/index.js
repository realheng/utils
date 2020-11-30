import { isArray } from "../utils";

export default function property(path) {
  if (!isArray(path)) {
    return shallowProperty(path);
  }
  return function (obj) {
    return deepGet(obj, path);
  };
}

const shallowProperty = function (path) {
  return function (obj) {
    if (obj == null) return void 0;
    return obj[path];
  };
};

const deepGet = function (obj, path) {
  const length = path.length;
  if (obj == null || !length) return void 0;
  for (let index = 0; index < length; index++) {
    const key = path[index];
    obj = obj[key];
    if (obj == null) return void 0;
  }
  return length ? obj : undefined;
};
