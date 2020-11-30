const _range = function (start, stop, step) {
  // 校正起点和终点
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }

  // 校正步长
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  const length = Math.max(0, Math.ceil((stop - start) / step));

  const range = [];

  for (let index = 0; index < length; index++, start += step) {
    range[index] = start;
  }
  return range;
};

export default _range;
