const oldObj = {
  name:'张三',
  age:20,
  colors:['orange','green','blue'],
  friends:{
    name:'李四'
  }
}

// const newObj = Object.assign({},oldObj)

// newObj.name = '王五'
// newObj.friends.name = '王五'
// console.log('oldObj',oldObj)
// console.log('newObj',newObj)



function deepClone(obj){
  if(typeof obj !== 'object' || obj == null){
    return obj
  }

  let result

  if(obj instanceof Array){
    result = []

  }else{
    result = {}
  }

  for (const key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

const cloneObj = deepClone(oldObj)
cloneObj.name = '李四'
cloneObj.friends.name = '王五'
console.log('oldObj',oldObj)
console.log('cloneObj',cloneObj)

 