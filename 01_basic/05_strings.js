//  About string and its method
// Old way to concatinate the string

const firstName= "soniya"
const secondName=" kazi"

console.log(firstName + secondName +" is my full name")

// New way to concatinate string and in current practise is
console.log(`${firstName}${secondName} is my full name`)

// ----------ways to declare a string---------------
// first way
const fullName="soniya k"

// second way and the standard way to declare a string
const myName= new String("soniya")
console.log(myName) // here soniya has become an type of array something like [soniya]

// find the length of the string
console.log(myName.length) // output is 6

// methods or functions of string
// *******anchor()************

const contentstring="Hello world"
// console.log(contentstring.anchor(Hello)) related to html

// ********at()**********
const sentance="Hello my name is soniya"
console.log(sentance.at(3)) // returns a string after the 3rd index that is `l`

// ***** big()***********
// also related to html to make string big <big>str</big>

// ***** blink()***********
// also related to html to make string big <blink>str</blink>

// ***** bold()***********
// also related to html to make string big <blink>str</blink>

// ***** charAt()***********
console.log(`The character at index ${sentance.charAt(4)}`) // The character at index o, something like at()

// ***** charCodeAt()***********
// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
console.log(`The charter code for the index is ${sentance.charCodeAt(4)} and the chartAt is ${sentance.charAt(4)}`)
//The charter code for the index is 111 and the chartAt is o

// ***** codePointAT()***********
const icons = '☃★♲';
console.log(icons.codePointAt(1)); //a non-negative integer that is the Unicode code point value of the character starting at the given index

// ***** concat()***********
const num1="soniya"
const num2=" kazi"
console.log(`The concatinated string is ${num1}${num2}`) //The concatinated string is soniya kazi

// ***** endsWith()***********
const sent="This is my cat!"
console.log(sent.endsWith('cat', 14)); //true
console.log(sent.endsWith('cat!'))     //true
console.log(sent.endsWith('soniya'))   //false returns true or false where index is the number upto end

// ***** fixed()***********
// fixed with font <tt>str</tt>

// ***** fontColor()***********
// adds color to the str <font color="red">Hello, world</font>
// fontcolor(color)

// ***** fontSize()***********
// <font size="7">Hello, world</font>
// document.getElementById("yourElemId").style.fontSize = "7pt";

// ***** fromCharCode()***********
// ***** fromCodePoint()***********

// ***** includes()***********
const set1="The sentence is very important and crucial"
const word="important"
const word1="soniya"
console.log(`The word "${word}" ${set1.includes(word) ? 'is' : "is not present"} in the sentance`) //The word "important" is in the sentance
console.log(`The word "${word1}" ${set1.includes(word1) ? 'is' : "is not present"} in the sentance`) //The word "soniya" is not present in the sentance

// ***** fontSize()***********

// ***** fontSize()***********
// ***** fontSize()***********

