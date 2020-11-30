import { isArray, slice } from "../../common/utils";

export default function chunk(ary, count) {
  if (!isArray(ary) || typeof count !== "number" || count < 1) return [];
  const results = [];
  const length = ary.length;
  let index = 0;

  // 以上为参数校验、参数准备和重置工作
  while (index < length) {
    results.push(slice.call(ary, index, (index += count)));
  }
  return results;
}
