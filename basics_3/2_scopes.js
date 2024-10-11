var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30    
}
// console.log(a); // Reference error: a is not defined
// console.log(b); // Reference error: b is not defined
console.log(c);


console.log('***********************************************************');

let d = 100
if (true) {
    let d = 1000    
    console.log("Displayed Inner d: ",d);
}
console.log("Displayed Outer d: ",d);
