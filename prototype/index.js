/**
 * 对应名称
 * - prototype : 原型
 * - __proto__ ：原型链（链接点）
 * 从属关系
 * prototype -> 函数的一个属性：对象{}
 * __proto__ -> 对象Object的一个属性： 对象{}
 * 对象的 __proto__ 保存着该对象的对象的构造函数的prototype
 * 
 */


function Test(){
  this.a = 1
  // this.b = 333
}


console.log(Test.prototype)


Test.prototype.b = 2
Test.prototype.c = 222

const test = new Test()

console.log(test.__proto__)



console.log(test.__proto__ === Test.prototype)


console.log(Test.prototype.__proto__)

console.log(Test.prototype.__proto__ === Object.prototype)
console.log(test.__proto__.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)
Object.prototype.c = 3
console.log(test)

/**
 * 
 * test {
 *  a:1,
 *  b:333,
 *  __proto__:Test.prototype = {
 *    b:2,
 *    c:222,
 *    __proto__:Object.protype = {
 *      c:3
 *    }
 *  }
 * }
 */


console.log(test.a)
console.log(test.b)
console.log(test.c)


//Function Object:函数 对象
console.log(Test.__proto__ === Function.prototype)



console.log(Function)


console.log(Function.__proto__ === Function.prototype)


console.log(Function.prototype )

console.log(Object.__proto__)


//const obj = {}
// const obj = new Object(); //function

console.log(typeof Object)


console.log(Object.__proto__ === Function.prototype)



// test => {
  // a:1,
  // b:333
// }

console.log('________')


console.log(test.hasOwnProperty('a'))
console.log(test.hasOwnProperty('b'))
console.log(test.hasOwnProperty('c'))


console.log('a' in test)
console.log('b' in test)
console.log('c' in test)
 


console.log(test.constructor)
console.log(test.constructor === Test)


function Test1 (){
  this.b === 666
}
// test.constructor -> 示例test对象的构造函数
 
test.constructor = Test1
console.log(test.b)

console.log(test.__proto__)