import createIndexFinder from "./base";
import sortedIndex from "../sortedIndex";
import _findIndex, { _findLastIndex } from "../findIndex";
const _indexOf = createIndexFinder(1, _findIndex, sortedIndex);
const _lastIndexOf = createIndexFinder(-1, _findLastIndex);

export default _indexOf;
export { _lastIndexOf };
