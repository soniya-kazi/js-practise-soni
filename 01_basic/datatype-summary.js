// Datatypes : Primitive datatypes and non-primitive datatypes
// Primitive datatypes: 7 types ie, 1. string, Number,boolean, BigInt, symbols, null, undefined

// Primitive datatypes

// ************strings***************
const name="soniya"
console.log(typeof name) // datatype : string

// ************Numbers***************
const age=24
console.log(typeof age)// datatype : Number

// ************Bigint***************
const stack=9886547645764467n
console.log(typeof stack) // datatype : Bigint

// ************boolean***************
const isLoggedIn=true
console.log(typeof isLoggedIn)// datatype : boolean

// ************null***************
const trmp=null
console.log(typeof trmp)// datatype : object

// ************undefined***************
let email;
console.log(typeof email)// datatype : undefined

// Non primitive datatype or reference datatype : 1. Array, 2. object 3. function

// ************Arrays***************
const heros=["soniya","priya","tanjira","kazi"]
console.log(typeof heros)// datatype : object

// ************object***************
const items={
    sis: "priyanka",
    age: 24
}
console.log(typeof items)// datatype : object

// ************strings***************
let myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction)// datatype : function

//  stack and heap
//  stack all the primitive datatype is in stack memory
let myName="soniya kazi"
let myNewName= myName

console.log(myNewName)
console.log(myName)

myNewName="soniya priya"
console.log(myNewName);
console.log(myName);

// ******************Heap memory*******************
let userOne={
    email: "soniya01@gmail.com",
    UPI: "soni@ybl"
};

let userTwo=userOne
 userTwo.email="soniyapriya@gmail.com"

console.log(userOne);
console.log(userTwo);
