// 数组取交集
function sameNumbers(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return new Error('参数请输入数组类型！')
  }
  arr1.map(Number);
  arr2.map(Number);
  console.log(arr1);
  let map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], map.has(arr1[i] ? map.get(arr1[i] + 1) : 1))
  }
  let result = [];
  for (let i = 0; i <= arr2.length; i++) {
    if () {

    }
  }

}

sameNumbers([1, 2, '3', 5, 5, 6], [4, 5, 6, 2])
