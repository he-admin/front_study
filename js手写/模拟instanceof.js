const mockInstanceOf = function (l, r) {
  if (typeof l !== 'object') {
    return false
  }
  let left = l.__proto__;
  // 法一
  // while (true) {
  //   if (left === r.prototype) {
  //     return true
  //   }
  //   if (left === null) { // 最终对象指向null
  //     return false
  //   }
  //   left = left.__proto__;
  // }

  //法二
  while (left) {
    if (left === r.prototype) {
      return true
    }
    left = left.__proto__;
  }
  return false
}

console.log([] instanceof Object)
console.log(mockInstanceOf([], Object));

let timeout1;
timeout1 = setTimeout(function(){
  //timeout = null;
}, 1000)

setTimeout(()=>{
  console.log(timeout1);
},5000)


const test = function (){

}
test.a = 1;
console.log(test.a);
