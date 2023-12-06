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
//html code for fontsize to be dynamically set by javascript

// ***** indexOf()***********
const set2="The words index must be found in the sentence and even the words can repeat"
const searchword="words"
let indexofsecond=set2.indexOf(searchword)
console.log(`The index of the "${searchword}" is ${set2.indexOf(searchword)}`) //The index of the "words" is 4

// if repeated words need to be traced
console.log(`The index of the repeated word in the sentence is ${set2.indexOf(searchword, indexofsecond +1)}`); //The index of the repeated word in the sentence is 59

// *****************lastIndexof()***************
const set5="the words index can be found and of the words repeated the index of the repeated words can also be found"
let searchword3="found"
console.log(`If the last word is "${searchword3}" then ${set5.lastIndexOf(searchword3) ? 'does':'does not'} end with fond`); //If the last word is "found" then does end with fond

// *****************localcomapare()***************
const comp1="SONIYA"
const comp2="soniya"
console.log(comp1.localeCompare(comp2)); //1 true output as the word is same
console.log(comp2.localeCompare(comp1,'en', {sensitivity:"base"})) //0 false as the senitivity isnt same.

// *****************match()***************
const set6="Hi im Soniya nice to meet You"
const matchis=/[A-Z]/g
console.log(set6.match(matchis)); //[ 'H', 'S', 'Y' ] got the match in an array

// *****************matchAll()***************
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2'; //pending cannot understand

// *****************normalize()***************
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
const newname1= name1.normalize('NFC')
const newname2= name1.normalize('NFD')
console.log(`${newname1} and ${newname2}`)

// *****************padEnd()***************
let padendstr='Hello World!'
console.log(`${padendstr.padEnd(15, '.')}`); //Hello World!... total words are 15 

// *****************padStart()***************
let padstartstr='World!'
console.log(`${padstartstr.padStart(10, '*')}`); //****World! total letters or characters add up to 10

// *****************repeat()***************
const mood="Very "
console.log(`Im ${mood.repeat(3)} happy`);//Im Very Very Very  happy

// *****************replace()***************
const paragraph="My name is priya"
console.log(paragraph.replace('priya','Soniya')); //My name is Soniya 

// *****************repeatAll()***************
const parag1="Replace all the words that contain priya in it, let priya be my nick name"
console.log(parag1.replaceAll('priya','soniya')) //Replace all the words that contain soniya in it, let soniya be my nick name

// *****************search()***************
const parag2="The hello world!"
const regex=/[^\w\s']/g
console.log(parag2.search(regex)) // 15 returns the position
console.log(parag2[parag2.search(regex)]); //! returns non word character not whitespace or single quote

// *****************slice()***************
const parag3="My name is soniya"
console.log(parag3.slice(-7,-2)); //returns  soni
console.log(parag3.slice(6)) //e is soniya
console.log(parag3.slice(-4));//niya

// *****************split()***************
const parag4="My name is: soniya"
const store=(parag4.split(':'));
console.log(store[1]); // soniya

// *****************startsWith()***************
const parag5="I love coding"
console.log(parag5.startsWith('I')); //true
console.log(parag5.startsWith('I', 3)) //false
console.log(parag5.startsWith('I', 0)) //true

// *****************substring()***************
const parag6="test for substring"
console.log(parag6.substring(3)); //t for substring
console.log(parag6.substring(3,8)); //t for

// *****************toLocalLowerCase()***************
const dotted = 'İstanbul';
console.log(dotted.toLocaleLowerCase()); //i̇stanbul

// *****************toLocalUpperCase()***************
const lower="priya"
console.log(lower.toLocaleUpperCase()); //PRIYA

// *****************toLowerCase()***************
const parag7="THIS STATEMENT NEEDS TO BE CONVERTED TO LOWER CASE"
console.log(parag7.toLowerCase()); //this statement needs to be converted to lower case

// *****************upperCase()***************
const parag8="this statement needs to be converted to upper case"
console.log(parag8.toUpperCase()); //THIS STATEMENT NEEDS TO BE CONVERTED TO UPPER CASE

// *****************toStirng()***************
const newobj= new String("kazi")
console.log(newobj); //[String: 'kazi']
console.log(newobj.toString()); //kazi

// *****************trim()***************
const greeting = '   Hello world!   ';
console.log(greeting.trim()); //Hello world!

// *****************trimeStart()***************
const parag9="   hello World!  "
console.log(parag9.trimStart()); //hello World!

// *****************trimEnd()***************
const parag10="  Hello World!  "
console.log(parag10.trimEnd()); //  Hello World!

//  *****************valueOf()***************
const stringObj = new String('foo');
console.log(stringObj)
console.log(stringObj.valueOf()); //foo

