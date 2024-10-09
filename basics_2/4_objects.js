// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "vishal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regUser = {
    email:"rvs.vishal@gmail.com",
    fullname : {
        userfullname:{
            firstname:"Vishal",
            lastname:"Shrivastav"
        }
    }
}

console.log(regUser.fullname);
console.log("-------------------------");
console.log(regUser.fullname.userfullname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d",5:{6:"f",7:"g"}}
// const obj3 = {obj1,obj2} // creates object containing objects
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign(obj1,obj2) //
// console.log(obj1);
// const obj3 = Object.assign({},obj1,obj2) // {} is optional but it guarantees return an object
const obj3 = {...obj1,...obj2}
console.log(obj3);
// console.log(obj4);
console.log(Object.keys(tinderUser));// Returns array of keys
console.log(Object.values(tinderUser));// Returns array of values
console.log(Object.entries(tinderUser));// Returns array of array with 0th element is key and 1st is value
console.log(tinderUser.hasOwnProperty("isLoggedIn"));// Returns false if doesn't exxist else true