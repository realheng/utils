import { _, restArgs, executeBound } from "../../base";

const _partial = restArgs(function (func, preArgs) {
  const placeholder = _.placeholder;
  const bound = restArgs(function (callingArgs) {
    let position = 0;
    const finalArgs = [];
    for (let index = 0; index < preArgs.length; index++) {
      finalArgs[index] =
        preArgs[index] === placeholder
          ? callingArgs[position++]
          : preArgs[index];
    }

    while (position < callingArgs.length) {
      finalArgs.push(callingArgs[position++]);
    }
    return executeBound(func, bound, this, this, finalArgs);
  });

  return bound;
});

export default _partial;
