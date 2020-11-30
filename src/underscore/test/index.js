import _ from "../src";

export default () => {
  console.log(
    _.chain([1, 2, 3])
      .map((item) => item * 2)
      .value()
  );
};
