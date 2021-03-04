// 1. JS中形参接收值，不管是原始值还是引用值
let obj = {
    color: 'red'
}
function test(obj) {
    obj.color = 'black'
    obj = {}
    console.log(obj.color);
}
test(obj)
console.log(obj.color);