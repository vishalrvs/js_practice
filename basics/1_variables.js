const accountId = 1234;
let accountName = 'Vishal Shrivastav';
/*
prefer not to usr var
because of issue in block scope and functional scope 
*/
var accountEmail = 'abc@gmail.com';
accountPassword = 'abc123';
let accountCity

console.log(accountId);
// accountId = 111; (Type error: Assignment to constant variable.)
// console.log(accountId);
console.table([accountId,accountEmail,accountName,accountPassword,accountCity])

accountName = 'Bhuru';
accountEmail = 'bhuru@gmail.com';
accountPassword = 'ab123';
accountCity = 'Amgaon'

console.table([accountId,accountEmail,accountName,accountPassword,accountCity])
