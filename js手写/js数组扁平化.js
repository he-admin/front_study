const flat = function (arr) {
  let newArr = [];
  for (let item in arr) {
    if (Array.isArray(arr[item])) {
      newArr = newArr.concat(flat(arr[item]))
    } else {
      newArr.push(arr[item])
    }
  }
  return newArr
}


const flatten = function (arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}


const whileFlatten = function (arr){
  while(arr.some((item)=>Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}

console.log(whileFlatten([1, 2, [3, [4], 5, 6]]));


console.log([1,2,3,4].indexOf())
