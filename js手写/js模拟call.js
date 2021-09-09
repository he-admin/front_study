Function.prototype.selfCall = function (context) {
  context = context || window // 如果为null，就指向window
  context.fn = this; // this指向bar函数 context =  {value:1,fn: bar}
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  let result = eval(`context.fn(${args})`); // 在eval中，自动调用 args.toString()
  delete context.fn
  return result
}

var foo = {value: 1};

function bar(name, age) {
  //console.log(name, age, this.value);
  return {
    name,
    age,
    value: this.value
  }
}

console.log(bar.selfCall(foo, '张三', 18))// 谁调用，this指向谁,所以这里this 指向 bar函数
