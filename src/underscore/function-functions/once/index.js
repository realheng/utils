import _partial from "../partial";
import { _before } from "../before-after";
const _once = _partial(_before, 2);

export default _once;
