function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers() // returns NaN
result = addTwoNumbers(1,2) // returns 3

console.log(result); // Undefined

function addTwoNumbers(num1,num2) {
    return num1 + num2
}

result = addTwoNumbers(1,2)
console.log(result);


function isloggedIn(username) {
    // To handle undefined (if value not passed from arguments)
    if(!username){
        return `Enter username`
    }
    return `Hi ${username}`
}

console.log(isloggedIn()); // 
console.log(isloggedIn(`Vishal`));


function funWithDefaultParam(username = 'Vishal'){
    if (username=== 'Vishal'){
        return `Default user is ${username}`
    }
    return `Hello ${username}`
}
console.log(funWithDefaultParam());
console.log(funWithDefaultParam("Hitesh"));

// rest operater
function calculateCartPrice(...num) {
    return num
}

console.log(calculateCartPrice());
console.log(calculateCartPrice(1,2,434,255,65,22,5,79));

const user = {username:"Vishal", age: 31}

function handleObjects(anyObject) {
    console.log(`username is ${anyObject.username} and age is ${anyObject.age} `);    
}
handleObjects(user)
// handleObjects() // Return error

