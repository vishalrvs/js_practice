const name = "Vishal"
const bday = '14/03/1993'

// console.log(name + " " + bday) // Old method
console.log(`Hello, I am ${name}. My birtdate is ${bday}. Thanks for watching.`) // String interpolation

const newName = new String('Vishal Shrivastav')

console.log(newName.length); // Returns length of string

console.log(newName.charAt(5));  /* returns charecter of string at given index*/

console.log(newName.indexOf('i',11)); /* returns position of character starting from 0 and -1 if not available */

console.log(newName.substring(2,5)); /* returns Substring where 2 is starting index and 5 is ending index.So, 3 charecter will be given*/

console.log(newName.slice(-12,-5)); /* Same as substring but you can give negetive index also*/

console.log(' kkjkk    '.trim()); /* Same as substring but you can give negetive index also*/

let url = "http://vishal .com";
console.log(url.replace(' ','%20'))

console.log(newName.includes('Vishal')) // Returns true if string is in variable

console.log("Vishal-R-Shrivastav".split("-")) // Return array seperated by string