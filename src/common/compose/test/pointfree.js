import curry from "../../curry";

export default function test() {
  const data = {
    result: "SUCCESS",
    tasks: [
      {
        id: 104,
        complete: false,
        priority: "high",
        dueDate: "2013-11-29",
        username: "Scott",
        title: "Do something",
        created: "9/22/2013"
      },
      {
        id: 105,
        complete: false,
        priority: "medium",
        dueDate: "2013-11-22",
        username: "Lena",
        title: "Do something else",
        created: "9/22/2013"
      },
      {
        id: 107,
        complete: true,
        priority: "high",
        dueDate: "2013-11-22",
        username: "Mike",
        title: "Fix the foo",
        created: "9/22/2013"
      },
      {
        id: 108,
        complete: false,
        priority: "low",
        dueDate: "2013-11-15",
        username: "Punam",
        title: "Adjust the bar",
        created: "9/25/2013"
      },
      {
        id: 110,
        complete: false,
        priority: "medium",
        dueDate: "2013-11-15",
        username: "Scott",
        title: "Rename everything",
        created: "10/2/2013"
      },
      {
        id: 112,
        complete: true,
        priority: "high",
        dueDate: "2013-11-27",
        username: "Lena",
        title: "Alter all quuxes",
        created: "10/5/2013"
      }
    ]
  };

  const fetchData = async () => Promise.resolve(data);

  //我们需要写一个名为 getIncompleteTaskSummaries 的函数，
  // 接收一个 username 作为参数，从服务器获取数据，
  // 然后筛选出这个用户的未完成的任务的 ids、priorities、titles、和 dueDate 数据，
  // 并且按照日期升序排序。
  // 以Scott为例子，筛选出的数据如下
  // [
  //     {id: 110, title: "Rename everything",
  //     dueDate: "2013-11-15", priority: "medium"},
  // {id: 104, title: "Do something",
  //     dueDate: "2013-11-29", priority: "high"}
  // ]

  // 这个功能分为几个步骤
  // 1. 请求数据
  // 2. 返回请求数据里的tasks
  // 3. 找到username为Scott的数据 prop('username')
  // 4. 找到Scott数据里的未完成的任务 map()
  // 5. 从未完成任务数据里面筛选ids、priorities、titles、dueData等数据
  // 6. 按照日期升序排序

  // 编写基本函数
  var prop = curry(function (name, obj) {
    return obj[name];
  });

  var propEq = curry(function (name, val, obj) {
    return obj[name] === val;
  });

  var filter = curry(function (fn, arr) {
    return arr.filter(fn);
  });

  var map = curry(function (fn, arr) {
    return arr.map(fn);
  });

  var pick = curry(function (args, obj) {
    var result = {};
    for (var i = 0; i < args.length; i++) {
      result[args[i]] = obj[args[i]];
    }
    return result;
  });

  var sortBy = curry(function (fn, arr) {
    return arr.sort(function (a, b) {
      a = fn(a);
      b = fn(b);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  });

  var getIncompleteTaskSummaries = function (membername) {
    return fetchData()
      .then(prop("tasks"))
      .then(filter(propEq("username", membername)))
      .then(filter(propEq("complete", false)))
      .then(map(pick(["id", "dueDate", "title", "priority"])))
      .then(sortBy(prop("dueDate")))
      .then(console.log);
  };

  getIncompleteTaskSummaries("Scott");
}
