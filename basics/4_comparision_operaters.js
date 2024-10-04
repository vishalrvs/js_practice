console.log('2' > 1)
console.log('2' < 1)
console.log('02' < 1) 
console.log('02' > 1) 


/*
The reason is that an equality check == and > < >= <= work differently.
Comparision convert null to a number, treating it as 0.
Thats why null >= 0 is true and null > 0 is false
*/
console.log(null > 0);
console.log(null == 0);
console.log(null != 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null >= 0);
console.log('--------------------------');
console.log(null > 1);
console.log(null == 1);
console.log(null != 1);
console.log(null < 1);
console.log(null <= 1);
console.log(null >= 1);
console.log('--------------------------');
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined != 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined >= 0);


