const { default: _filter } = require("../../collection-functions/filter");

const _compact = function (array) {
  return _filter(array, Boolean);
};

export default _compact;
