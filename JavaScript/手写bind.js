Function.prototype.myBind = function(ctx, ...args){
  console.log('aa',ctx)
  console.log('args',args)
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs)
}

// test

const a = {
  name: 'name of a'
}

function test (...msg) {
  // console.log(this.name)
  // console.log(...msg)
}
const t = test.myBind(a, 'hello')
t('world');