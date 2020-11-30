import _difference from "../difference";
import { restArgs } from "../../base";
const _without = restArgs(function (ary, otherArrays) {
  return _difference(ary, otherArrays);
});

export default _without;
