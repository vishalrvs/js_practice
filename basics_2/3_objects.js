// Singleton
// Object.create()

// object literals
const mySym = Symbol("Key1")

const JsUser = {
    name : "Vishal",
    "full name" : "Vishal Shrivastav",
    [mySym] : "mySymbol as key",
    age : 31,
    location : "Amgaon",
    email : "rvs.vishals@gmail.com",
    isLogedIn : false,
    lastLogginDays : ["Monday","Wednesday","Friday"]
}

console.log(JsUser)
// console.log(JsUser."fullname"); // Error : Unexpected String
console.log(JsUser['full name']); 
console.log(JsUser.name); 
console.log(JsUser[mySym]); // Accessing mySym Symbol key of an object


JsUser.email = 'vishal@gmail.com' // Changing value of an object

JsUser.greeting = function(){
    console.log("Hello JS User");    
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.email}`);        
}

Object.freeze(JsUser) // Freezing object. Not able to change value if freezed
JsUser.email = 'vishal@microsoft.com' // Changing value of an object

console.log(JsUser.email); 
console.log(JsUser.greeting); // [Function  (anonymous)] 
console.log(JsUser.greeting()); // Treat as a function
console.log(JsUser.greeting2()); // Treat as a function






