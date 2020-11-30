import _group from "./base";
import { _has } from "../../base";
const _groupBy = _group(function (result, value, key) {
  if (_has(result, key)) {
    result[key].push(value);
  } else {
    result[key] = [value];
  }
});

const _indexBy = _group(function (result, value, key) {
  result[key] = value;
});

const _countBy = _group(function (result, value, key) {
  if (_has(result, key)) {
    result[key]++;
  } else {
    result[key] = 1;
  }
});

const _partition = _group(function (result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true);

export { _groupBy, _indexBy, _countBy, _partition };
