const deepCopy = function (obj) {
  if (typeof obj !== 'object') {
    return; // 结束递归
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj [key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
let obj = {
  type: 'person',
  property: {
    age: 18,
    ability: [{age: 15}, {name: '张三'}]
  }
}

let newObj = deepCopy(obj);
console.log(newObj.property.ability === obj.property.ability)

