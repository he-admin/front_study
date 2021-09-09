Function.prototype.myApply = function (context, arr) {
  context = context || window // context就是传进去的第一个参数
  let fn = Symbol();
  context[fn] = this;
  let result = context[fn](arr)
  delete context[fn]
  return result;
}

let obj = {value: 1};

function bar(name, age) {
  console.log(name, age);
}

bar.myApply(obj,[1212])
