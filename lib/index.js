class Test {
   static create (options) {
      return new Test(options)
   }
   constructor (options = {}) {
      console.log('---------create------', options)
   }
   add (arr) {
    return eval(arr.join("+"))
   }
}
module.exports = Test