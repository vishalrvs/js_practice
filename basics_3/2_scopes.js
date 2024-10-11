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

console.log('**********************Nested Function Scope*************************************');

function one() {
    let username = "Vishal"

    function two() {
        const website = 'www.stockinfo.com'
        console.log(username);
        
    }
    // console.log(website); // Reference error: website is not defined
    two()
}

one()

console.log('**********************Nested If Scope*************************************');


if (true) {
    let user = 'User_Vishal'
    if(user === 'User_Vishal'){
        const web = "v.com"
        console.log(user + web);        
    }
    // console.log(web);    // ReferenceError: web is not defined
}
// console.log(user); // ReferenceError: user is not defined

console.log('**********************Hoisting*************************************');

console.log(addOne(5));
function addOne(value) {
    return ++value
}

// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
let addTwo = function(value) {
    return value+=2
}
console.log(addTwo(5));
