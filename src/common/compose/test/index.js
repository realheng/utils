import { compose } from "../src";
function hello(name) {
  return `hello! ${name}`;
}

function toUpperCase(str) {
  return str.toString().toUpperCase();
}

export default function test() {
  const composed = compose([hello, toUpperCase]);
  if (composed) {
    console.log(composed("yuvfhg"));
  }
}
