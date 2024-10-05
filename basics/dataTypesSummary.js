// Premitive DataTypes
/*
1. Number
2. String
3. Boolean
4. null
5. undefined
6. BigInt
7. Symbol
*/
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(id == anotherId);
console.table([id,anotherId]);

const num = 923456789012345;
console.log(typeof num)
console.log(2 ** 53)

// Reference Type Or Non-Premitive
/*
1. Array
2. Objects
3. Functions
*/

const arrayHero = ["Shaktiman","nagraaj","doga"];
let myObj = {name:"Vishal",age:31,surname:"Shrivastav",array:["isMarried","No"]}
const myFunction = function(){
    console.log("Hello World");
    return arrayHero;
}
console.log(myObj.array[1]);

// console.table(arrayHero,myObj,myFunction())