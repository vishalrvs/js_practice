let arr = [112,33,5,11,'sxsx','44']
for (const ele of arr) {
    console.log(ele); // Returns element of array
}

// let obj = {name: "Vishal", age:31}
let obj = {name: "Vishal", age:31 , color: {hair : 'black', skin : "fair"}}
// for (const ele of obj) {  // TypeError: obj is not iterable
    // console.log(ele); 
// }

map1 = new Map()
// map1.set(['cpp','js','py','vb'],['C plus plus','Java script','Python','Visual Basic'])
map1.set('cpp','C plus plus')
map1.set('js','Java Script')
// console.log(map1); // Map(2) { 'cpp' => 'C plus plus', 'js' => 'Java Script' }


for (const ele of map1) {
    // console.log(key);   // Returns [key,value]  in ele
    console.log(ele);
}