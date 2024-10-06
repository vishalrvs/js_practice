const marvel_arr = ["thor", "IronMan", "SpiderMan"]
const dc_arr = ["Superman","Flash","Batman"]

marvel_arr.push(dc_arr) // Returns Existing array with added array in array
console.log(marvel_arr);
console.log(marvel_arr[3][1]);

console.log(marvel_arr.concat(dc_arr)); // Concat returns new array with added seperated values
console.log(marvel_arr);// Original Array remains same 

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let newarr = [...arr1,...arr2]// Spread Operater
console.log(newarr)

let unflat_arr = [1,2,3,[,66,77,11],[2,5,[11,4,33]]]
let flat_arr = unflat_arr.flat(2); // Returns new array
console.log(unflat_arr)
console.log(flat_arr)

console.log(Array.isArray('Vishal Shrivastav')); // isArray returns true if it is an array
console.log(Array.from(1234)); // Returns Empty Array
console.log(Array.from("Vishal Shrivastav")); // Creates Array from string

let A1 = 12
let A2 = 13
let A3 = [111,121,123]

console.log(Array.of(A1,A2,A3)); // Create new array