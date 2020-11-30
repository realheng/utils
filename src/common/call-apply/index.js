export function call(fn, context) {
  context = context == null ? window : context;
  if (typeof fn !== "function") {
    return;
  }
  context.fn = fn;
  let result;
  const length = arguments.length;
  const args = [];
  for (let index = 2; index < length; index++) {
    args.push(arguments[index]);
  }
  eval("result = context.fn(" + args + ")");
  delete context.fn;
  return result;
}

export function apply(fn, context) {
  context = context == null ? window : context;
  if (typeof fn !== "function") {
    return;
  }
  context.fn = fn;
  let result;
  const length = arguments.length;
  const args = arguments[2] || [];
  eval("result = context.fn(" + args + ")");
  delete context.fn;
  return result;
}
