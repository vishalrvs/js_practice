"use strict";
const lang = ["Python","Java","CPP","Ruby","Go"]
// console.log(lang);
// -----------------------------------

// let i = 0
// lang.forEach(element => {
//     console.log(`${i} , ${element}`); 
//     i++
// });

// -----------------------------------

// lang.forEach(function(val){
//     console.log(val);    
// });

// -----------------------------------

// lang.forEach((val)=>{
//     console.log(val);    
// })

// -----------------------------------
// function printParam(params) {
//     console.log(params);    
// }

// lang.forEach(printParam);

// -----------------------------------

lang.forEach( ( item,index,arr) =>{
    console.log(item,index,arr);    
})