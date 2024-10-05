const score = 31
const balance = new Number(100000)

console.table([score,balance]);
console.log(balance);

console.log(typeof score.toString()) // Converts to string

console.log(balance.toString()) // Converts to string

console.log(balance.toFixed(2)) // Converts to float value

const otherNumber = 123.698
console.log(otherNumber.toFixed(2)) // Get value with precision

console.log((1000000).toLocaleString('en-In')) //Returns with ',' separeted values

/*  Maths */

console.log(Math.round(123.65))
console.log(Math.abs(-123.5))
console.log(Math.ceil(123.5))
console.log(Math.floor(123.5))
console.log(Math.random())

let max = 20
let min = 11

console.log(Math.floor ( Math.random() * ( max - min + 1 ) ) + min )



