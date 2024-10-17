let arr = [112,33,5,11,'sxsx','44']
for (const key in arr) {
    // console.log(key); // Returns key of array
}

// let obj = {name: "Vishal", age:31}
let obj = {name: "Vishal", age:31 , color: {hair : 'black', skin : "fair"}}
for (const key in obj) {  
    // console.log(key); // Returns key of object
}

map1 = new Map()
// map1.set(['cpp','js','py','vb'],['C plus plus','Java script','Python','Visual Basic'])
map1.set('cpp','C plus plus')
map1.set('js','Java Script')
// console.log(map1); // Map(2) { 'cpp' => 'C plus plus', 'js' => 'Java Script' }

// Not iterable
for (const [key, ele] in map1) {
    // console.log(key);    
    // console.log(ele);
}


