const ary = [1, 2, 3, 4, 5, null, undefined];
console.log(
  ary.sort((a, b) => {
    if (typeof a !== typeof b) {
      if (a == null) return 1;
      if (b == null) return -1;
    }
    return a - b;
  })
);
