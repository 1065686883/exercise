console.log(typeof {});
console.log(typeof null); // object
console.log(null instanceof Object); // false
console.log({} instanceof Object); // true

console.log(Object.prototype.toString.call('abc')); // 精确的判断