// data_types

// 1. primitive

// Number
// 100 4.55 3.2 
// String 
// 'this a string' + "This is a text"

// Boolean
// true false

// undefined
// null


// 2. Object
// Array
// Object
// function 


// ********* Numbers *********

var n = 1000;
var f = 7.5;
var nn = Number('45.45'); // convert String to Number
console.log(nn);
console.log(Number.parseInt(nn)); //convert floating number to integer
console.log(Number.MAX_VALUE);  // showing the max value in Number variabe
console.log(Number.MIN_VALUE);  // showing the min value in Number variabe
console.log(1 / 0);  // showing that infinity because 1/0
console.log('abc' * 5); // showing that NaN that means not a number


// ********* String *********

var str = 'String'  //this called strings literal, literal means tha directly assining
var str2 = "String"
var str3 = `String`


var str4 = String('Belayet')  //this called constructor
var str5 = String(156)
var str6 = String(5.66)

console.log(str4, str5, str6)



// ********* Booleans *********

var b = true
var b2 = false

var b3 = Boolean(true)
var b4 = Boolean(false)

console.log(b3,b4)


// ********* Null vs undefined *********

var abe    // undefined
var xyz = null  //null

console.log(xyz)
console.log(abe)


// ********* Hexadeciman and octal *********

var hex = 0xff     // defineing the hexadecimal,,,,if i declear a hexa must write 0x before hexadeciman number
console.log(hex)

var oct = 0o777      // defining the octal number,, if i declear a octal must write 0o before octal number
console.log(oct)

