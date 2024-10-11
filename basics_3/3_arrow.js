console.log('********** "this" in Object *************');

const user = {
    username : 'Vishal',
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to website...`);
        console.log(this); // Returns Object
        
    }
}

user.welcomeMessage()
user.username = 'Shrivastav'
user.welcomeMessage()
console.log(this); // Returns Empty object on node. But on browser it returns with windows object

console.log('********** "this" in function *************');

function thisDemoInFunction() {
    let temp = 1
    console.log(temp); 
    console.log(this.temp); // undefined
    console.log(this); // <ref *1> Object [global] {}
}
thisDemoInFunction()

console.log('********** "this" in function variable *************');

// Same output as above 
thisDemoInVariable = function () {
    let temp = 2
    console.log(temp); // 
    console.log(this.temp); // undefined
    console.log(this); // <ref *1> Object [global] {}
}
thisDemoInVariable()

console.log('********** "this" in arrow function *************');

const chai = () => {
    let user = 'Vishal Shrivastav'
    console.log(user);
    console.log(this);    
    console.log(this.user); // Undefined   
}
chai()

console.log('********** Inplicit arrow function *************');

const addTwoNum = (num1,num2) => num1 + num2 // You dont need to return , its like lambda in python one liner statement
const giveObj = () => ({user : 'Vishal',age : 31}) // If You need to return obj then use paranthesis

console.log(addTwoNum(1,2)); 

