/* 
Stack (Premitive), Heap (Non - Premitive)
*/
// Assigned copy of value to different memory
let a = 1
let b = a

b = 2
console.table([a,b]);

// Heap (Non - Premitive) => It uses refernce of memory, changes are made on original values
let arr1 = [1,2,4]
let arr2 = arr1

arr2[2] = 3
console.table([arr1,arr2]);