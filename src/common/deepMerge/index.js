const isObject = (val) =>
  val && (typeof val === "object" || typeof val === "function");

let count = 0;
function deepMerge(...objs) {
  const result = Object.create(null);
  count++;
  objs.forEach((obj) => {
    if (!isObject(result)) return;
    Object.keys(obj).forEach((key) => {
      const val = obj[key];
      if (isObject(val)) {
        if (isObject(result[key])) {
          result[key] = deepMerge(result[key], val);
        } else {
          result[key] = deepMerge(val);
        }
      } else {
        result[key] = val;
      }
    });
  });

  return result;
}

const complexObj1 = {
  dad: {
    name: "yyj",
    wife: {
      name: "zhr",
      son: {
        name: "yzh"
      }
    }
  }
};

const complexObj2 = {
  son: {
    name: "yzh",
    dad: {
      name: "yyj",
      wife: {
        name: "zhr"
      }
    }
  }
};
const result = deepMerge(complexObj1, complexObj2);

console.log(count);
console.log(result);
