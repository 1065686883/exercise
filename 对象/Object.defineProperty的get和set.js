// 'use strict'

let b = {
    a: 12
}
let temp = b.a
Object.defineProperties(b, {
    a: {
        get() {
            return temp
        },
        set(newValue) {
            temp = newValue
        }
    },
    news: {
        value: 'news'
    }
})
b.a = 'hello'
console.log(b, b.a, b.news);
console.log(Object.getOwnPropertyDescriptor(b, 'a'),'===>', Object.getOwnPropertyDescriptors(b));