import partial from "../src";
import { _ } from "../../utils";

export default () => {
  const show = partial(
    function show(name, age) {
      return `my name is ${name}, i am ${age} years old`;
    },
    _,
    18
  );

  console.log(show("yzh"));
};
