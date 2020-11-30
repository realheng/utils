import flatten from "../flatten";
import { restArgs } from "../../base";
import _unique from "../unique";
const _union = restArgs(function (args) {
  return _unique(flatten(args, true, true));
});

export default _union;
