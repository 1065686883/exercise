let o = { a: 1 }
temp = o.a
Object.defineProperty(o, 'a', {
    get() {
        return temp
    },
    set(newValue) {
        temp = newValue
    }
})
o.a = 999
console.log(o.a);