// function isContained(a, b){
//   if(!(a instanceof Array) || !(b instanceof Array)) return false;
//   if(a.length < b.length) return false;
//   var aStr = a.toString();
//   console.info(aStr);
//   for(var i = 0, len = b.length; i < len; i++){
//     console.info(aStr.indexOf(b[i]));
//     if(aStr.indexOf(b[i]) == -1) return false;
//   }
//   return true;
// }
// (function(){
//   var a = [1,2,3,4,5];
//   var b = [1,4,3,2];
//   var c = [1,6];
//   alert(isContained(a,b));// true
//   alert(isContained(a,c));// false
// })()

const isContain = function (arr1, arr2) {
  let shortArr = arr1.length <= arr2.length ? arr1 : arr2; // 取出长度较短的数组
  let longArr = arr2.length > arr2.length ? arr1 : arr2;
  let map = new Map();

  for (let i = 0; i < shortArr.length; i++) {
    if (map.has(shortArr[i])) {
      map.set(shortArr[i], map.get(shortArr[i]) + 1)
    } else {
      map.set(shortArr[i], 1)
    }
  }

  for (let i = 0; i < longArr.length; i++) {
    if (map.has(longArr[i])) {
      map.set(longArr[i], map.get(longArr[i]) - 1) // 如果长数组里面存在短数组的元素，短数组-1
    }
    if (map.get(longArr[i]) === 0) {
      map.delete(longArr[i])
    }
  }
  //console.log(map);
  return map.size === 0;
}

console.log(isContain([1, 4, 6, 6, 8], [1, 4, 6, 7, 8]));


// function r(a, b) {
//   const map = new Map()
//   const minArr = b.length < a.length ? b : a
//   for (const val of minArr) {
//     const count = map.get(val) || 0
//     map.set(val, count + 1)
//   }
//   for (const val of a) {
//     if (map.has(val)) {
//       const count = map.get(val)
//       if (count === 1) {
//         map.delete(val)
//       } else {
//         map.set(val, count - 1)
//       }
//     }
//   }
//   return map.size === 0
// }
//
// console.log(r([1,4,6],[1,4,7]));
