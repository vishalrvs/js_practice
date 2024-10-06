// array
const myArray = [1,2,3,4,5,6,7,8]
const myArray2 = [1,2,3,4,5,6,7,8,true,'Vishal']
const myArray3 = new Array(10,0,9,8,7,6,6)

console.table([myArray,myArray2,typeof myArray,typeof myArray2])
console.log(myArray3)


// Array Methods

let apush = myArray3.push("VishalS") // Modify array with a refrences of new value
console.log(myArray3); 
console.log('apush :',apush);


let apop = myArray3.pop() // Removes last element
console.log(myArray3); 
console.log('apop :',apop);

let aunshift = myArray3.unshift(1)// Add element at 0 th index
console.log(myArray3); 
console.log('aunshift :',aunshift);


let ashift = myArray3.shift()// Remove element at 0 th index
console.log(myArray3); 
console.log('ashift :',ashift);


console.log(myArray3.includes(0)) // returns true if value exists

console.log(myArray3.indexOf(11)) // returns -1 if doesn't exist in array

console.log(myArray3.indexOf(6)) // returns index of specified value from starting

console.log(myArray3.indexOf(6,-1)) // returns index of specified value from ending

console.log(myArray3.join(1)) // Returns new string as concatenated output


// slice and splice 
console.log("Array before slice and splice: ",myArray)
console.log('slice: ' ,myArray.slice(2,5)) // start and end
console.log("Array after slice: ",myArray)

console.log('splice: ' ,myArray.splice(2,6)) // substracted from 2 to 6 index and return spliced array
console.log("Array after slice: ", myArray)



