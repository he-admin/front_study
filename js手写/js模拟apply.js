
Function.prototype.myApply = function (context, arr) {
  context = context || window // context就是传进去的第一个参数，如果不传则指向window对象
  let fn = Symbol();
  context[fn] = this; // 如果在Function原型上绑定方法，那么this指向定义的函数
  console.log(context[fn]);
  let result = context[fn](arr);
   delete context[fn]
  return result;
}

let obj = {value: 1};

function bar(arr) {  // 这里bar函数相当于是Function的实例
  console.log(this.value);
  return arr
}
console.log(bar instanceof Function); // true

const bar2 = new Function();

console.log(bar2 instanceof Function); // true

console.log(bar.myApply(obj,[1212]));
