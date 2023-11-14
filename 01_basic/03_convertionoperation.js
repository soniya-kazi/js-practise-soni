// convertion to numbers

let age= false
let newAge= Number(age)
//console.log(newAge)
//console.log(typeof newAge);

// "33" => 33 number
// "33abc" => NaN not a number
// null => 0 
// undefined => NaN
// true => 1 and false => 0 

//  convertion to string

let name=null
let newName= String(name)
//console.log(newName);
//console.log(typeof newName)

// 33 => 33 
// undefined => undefined
// null => null 

// conversion to boolean

let myAge= 1
let myNewAge=Boolean(myAge)
console.log(myNewAge);
console.log(typeof myNewAge);

// 33 => true 
// soniya => true
// "" => false
// 1 => true and 0 => false

//****************operation ****************/
// arthematic operations
// console.log(2+2)
// console.log(2-2);
// console.log(2*3);
// console.log(2**2); // 2 power 2
// console.log(2/2);
// console.log(2%3);

// complex arthimetic operations

console.log(2+2+"2"-2+"2")
console.log(2*"2"+2)

// concatination of strings
let firstName="soniya"
let secondName="kazi"
let fullName= firstName + secondName
console.log(fullName);