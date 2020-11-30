import _partial from "../partial";
import _delay from "../delay";
import { _ } from "../../base";
const _defer = _partial(_delay, _, 1);
export default _defer;
