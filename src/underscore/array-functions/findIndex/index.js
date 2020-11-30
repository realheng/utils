import createPredicateIndexFinder from "./base";

const _findIndex = createPredicateIndexFinder(1);
const _findLastIndex = createPredicateIndexFinder(-1);

export default _findIndex;
export { _findLastIndex };
