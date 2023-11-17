console.log(2>0);
console.log(2<0);
console.log(2<=1);
console.log(2>=1);
console.log(2==1);

// these are the normal comparision operation where number is checked with number

// ******** comparision with string*********

console.log("2">2);
console.log("2"<2);
console.log("2"==2);

// so here the datatype is different yet the javascript gives unpredictable result.
//  console.log("2"==2); produces true as it converts "2" to number 

// ******** comparision with Null*********

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
// Here the 2 console log gives true because it converts null to 0 and compares

// ******** comparision with ===*********
console.log("2"===2); 
// strict checking with datatype

