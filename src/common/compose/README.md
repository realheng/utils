## compose

需求：编写函数，输入一个字符串'yuvfhg'，返回'HELLO, YUVFHG'‘
我们需要两步：
第一步：将'yuvfhg'转换为'hello, yuvfhg'。
第二步：将'hello, yuvfhg'转换为'HELLO, YUVFHG'

```javascript
function hello(name) {
  return `hello: ${name}`;
}

function toUpperCase(str) {
  retrun str.toString().toUpperCase()
}

const str = toUpperCase(hello('yuvfhg'))
```

刚刚上面的功能只需要两个步骤，所以手动将函数组合起来并不复杂

但是如果步骤多了，需要七八个步骤呢？手动合并就显得很麻烦
所以此时就需要一个能自动合并方法的函数 compose

```JAVASCRIPT
  const composedFn = compose(hello, toUpperCase)
  composedFn('yuvfhg') // => HELLP, YUVFHG
```

## pointfree

pointfree 指的是函数无须提及将要操作的数据是什么样的。依然是以最初的需求为例

```JAVASCRIPT
// 需求：输入 'kevin daisy kelly'，返回 'K.D.K'

// 非 pointfree，因为提到了数据：name
var initials = function (name) {
    return name.split(' ').map(compose(toUpperCase, head)).join('. ');
};

// pointfree
// 先定义基本运算
var split = curry(function(separator, str) { return str.split(separator) })
var head = function(str) { return str.slice(0, 1) }
var toUpperCase = function(str) { return str.toUpperCase() }
var join = curry(function(separator, arr) { return arr.join(separator) })
var map = curry(function(fn, arr) { return arr.map(fn) })

var initials = compose(join('.'), map(compose(toUpperCase, head)), split(' '));

initials("kevin daisy kelly");

```

## 实战

假设我们从服务器获取了一个这样的数据

```JS
const data = {
    result: "SUCCESS",
    tasks: [
        {id: 104, complete: false,            priority: "high",
                  dueDate: "2013-11-29",      username: "Scott",
                  title: "Do something",      created: "9/22/2013"},
        {id: 105, complete: false,            priority: "medium",
                  dueDate: "2013-11-22",      username: "Lena",
                  title: "Do something else", created: "9/22/2013"},
        {id: 107, complete: true,             priority: "high",
                  dueDate: "2013-11-22",      username: "Mike",
                  title: "Fix the foo",       created: "9/22/2013"},
        {id: 108, complete: false,            priority: "low",
                  dueDate: "2013-11-15",      username: "Punam",
                  title: "Adjust the bar",    created: "9/25/2013"},
        {id: 110, complete: false,            priority: "medium",
                  dueDate: "2013-11-15",      username: "Scott",
                  title: "Rename everything", created: "10/2/2013"},
        {id: 112, complete: true,             priority: "high",
                  dueDate: "2013-11-27",      username: "Lena",
                  title: "Alter all quuxes",  created: "10/5/2013"}
    ]
};
```

我们需要写一个名为 `getIncompleteTaskSummaries` 的函数，接收一个 `username` 作为参数，从服务器获取数据，然后筛选出这个用户的未完成的任务的 ids、priorities、titles、和 dueDate 数据，并且按照日期升序排序。

以 Scott 为例，最终筛选出的数据为：

```JAVASCRIPT
[ {id: 110, title: "Rename everything", dueDate: "2013-11-15", priority: "medium"}, {id: 104, title: "Do something", dueDate: "2013-11-29", priority: "high"} ]
```
