Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
  }
  throw new Error(`Function.prototype.bind - what is trying to be bound is not callable`)

  const self = this;
  const fn = function () {
  };
  const bind = function (...bindArgs) {
    const _this = this instanceof fn ? this : context;
    return self.apply(_this, [...args, ...bindArgs]);
  }
  fn.prototype = this.prototype;
  bind.prototype = new fn();
  return bind;
}

function test(args) {
  this.name = args;
  console.log(args);
}

const testFn = test.bind(123);
console.log(testFn(456));
