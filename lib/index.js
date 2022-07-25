const Noop = () => {}
class Test {
   errorHandler = Noop
   successHandler = Noop

   static create (options) {
      return new Test(options)
   }
   constructor (options = {}) {
      console.log('---------create------', options)
   }
   log (msg, level) {
      console.log('log: start', msg, level)
   }

   add (arr) {
    return eval(arr.join("+"))
   }
}
module.exports = Test