// // export default {
// //   name: '张三'
// // }
//
// const STATUS = {
//   pass: 1,
//   rejected: 2,
//   timeout: 3
// }
//
// const STATUS_TYPE = {
//   1: '通过',
//   2: '拒绝'
// }
//
// //const STATUS_OPTIONS = objectToArr(STATUS_TYPE) // [{name: '通过',value: 1},{name: '拒绝',value:2}]
//
// // export default {
// //   STATUS
// // }
//
// if (status === STATUS.pass) {
//
// }


let a = {
  prop: {name: '张三'}
}

let b  = {
  prop:{
    age:18
  }
}
Object.assign(b,a)
console.log(b);
