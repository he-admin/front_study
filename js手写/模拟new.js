function mockNew(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new Error('fn is not Function')
  }
  // 创建一个继承fn原型的对象
  const newObj = Object.create(fn.prototype);
  // 将fn中的也就是构造函数中的this指向newObj,并继承其属性，且接收其返回结果
  const result = fn.apply(newObj, args);
  return result && (typeof result === 'object' || typeof result === 'function') ? result : newObj
}

function Person(name, age) {
  this.name = name;
  this.age = age; // new 操作符如果构造函数没有return，则会自动加上return this,
  // 也可以主动更改如 return {},则this指向这个空对象
}

let person = mockNew(Person,'张三', 18);
console.log(person);
