import bind from ".";

export default () => {
  var foo = {
    value: 1
  };

  function bar(name, age) {
    this.habit = "shopping";
    console.log(this.value);
    console.log(name);
    console.log(age);
  }

  bar.prototype.friend = "kevin";

  var bindFoo = bind(bar, foo, "daisy");

  var obj = new bindFoo("18");
  // undefined
  // daisy
  // 18
  console.log(obj.habit);
  console.log(obj.friend);
  // shopping
  // kevin
};
