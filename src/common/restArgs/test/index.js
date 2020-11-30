import restArgs from "../src";

export default () => {
  var func = restArgs(function (a, b, c, d) {
    console.log(c); // 报错
  });

  func(1, 2);
};
