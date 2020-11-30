import createAssigner from "./base";
import _keys, { _allKeys } from "../keys";

const _extend = createAssigner(_keys);
const _extendOwn = createAssigner(_allKeys);
const _defaults = createAssigner(_allKeys, true);

export default _extend;
export { _extendOwn, _defaults };
