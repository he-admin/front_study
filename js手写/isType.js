const isType = (type) => {
  return (obj)=>{
    return Object.prototype.toString.call(obj) == `[object ${type}]`
  }
}

let checkIsArray = isType('Array');
let checkIsString = isType('String');

export {
  checkIsArray,
  checkIsString
}
console.log(checkIsArray([]));
