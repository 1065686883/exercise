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