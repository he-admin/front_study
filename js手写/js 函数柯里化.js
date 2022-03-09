function curry(fn, ...args) {
  function currid(...args2) {
    const allArgs = [...args, ...args2];
    return curry.call(null, fn, ...allArgs);
  }
  currid.toString = function () {
    return fn.apply(null, args)
  }
  return  currid
}
function dynamicAdd(...args) {
  return [...args].reduce((prev, curr) => {
    return prev + curr;
  }, 0)
}
//
//
// const add = curry(dynamicAdd);
// alert((add(1)(2)(3,4)));


// 参数固定写法
// function  curry(fn,...args1){
//   if(fn.length===args1.length){
//     return  fn(...args1)
//   }
//   return  function (...args2){
//     return curry(fn,...args1,...args2)
//   }
// }
// function add2(a,b){
//   return a+b;
// }

// const add = curry(dynamicAdd);
// console.log(add);
// console.log(add(1));
