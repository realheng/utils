import { _ } from "../../base";

const _isNaN = function (obj) {
  return _.isNumber(obj) && isNaN(obj);
};

export default _isNaN;
