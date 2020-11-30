import { restArgs } from "../../base";

const _delay = restArgs(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
});

export default _delay;
