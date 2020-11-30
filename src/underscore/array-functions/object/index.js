import { getLength } from "../../base";

const _object = function (list, values) {
  const result = {};
  const length = getLength(list);
  for (let index = 0; index < length; index++) {
    if (values) {
      result[list[index]] = values[index];
    } else {
      result[list[index][0]] = list[index][1];
    }
  }
  return result;
};

export default _object;
