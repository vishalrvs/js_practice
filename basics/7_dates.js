// Date
let myDate = new Date();
console.log("Coordinated Universal Time: ",myDate);
console.log("toString() : ",myDate.toString());
console.log("toLocaleTimeString() : ",myDate.toLocaleTimeString());
console.log("toLocaleDateString() : ",myDate.toLocaleDateString());
console.log("toDateString() : ",myDate.toDateString());
console.log("toJSON() : ",myDate.toJSON());
console.log("typeof : ",typeof(myDate));

let ndate = Date.now()
console.log("typeof : ",typeof(ndate));
console.log("ndate : ",ndate.toLocaleString('default',{weekday : "long"}));
console.log("ndate : ",ndate);


