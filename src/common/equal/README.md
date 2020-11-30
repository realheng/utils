## 利用隐式转换来判断基本类型和对象

**Boolean**

```JS
var a = true;
var b = new Boolean(true);

console.log(+a === +b) // true

```

**Date**

```JS
var a = new Date(2009, 9, 25);
var b = new Date(2009, 9, 25);

console.log(+a === +b) // true

```

**RegExp**

```js
var a = /a/i;
var b = new RegExp(/a/i);

console.log("" + a === "" + b); // true
```

**Number**

```js
var a = 1;
var b = new Number(1);

console.log(+a === +b); // true
```
