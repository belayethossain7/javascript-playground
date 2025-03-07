// Arithmatic Operator
// + - * / % ++ --

var a = 11;
var b = 6
console.log(a % b)

// Incremental
//Pre-incremental and Post-Incremental
var c = 10
var d = 10
console.log(++c) // pre-incemental give output directly increase value
console.log(d++) // post-incremental first give output mail value , then
console.log(d)   // then affter post incremental give outpur increasing value or increment value 

//decremental
//pre-decremental and post-decremental
// same this happening in decremental but it decrement the value 
var e = 20
var f = 20
console.log(--e)
console.log(f--)
console.log(f)

//Assignment Operator
console.log('Assignment operator')
var ab = 10
var bc = 20


ab += bc   // ab = ab + bc
           // same thing happen below all assignment operator code section
console.log(ab)

ab -= bc
console.log(ab)

ab *= bc
console.log(ab)

ab /= bc
console.log(ab)

ab %= bc
console.log(ab)  

//Comparison operator
// Comparison operator always return Boolean value
console.log('Comparison Operator')

var x = 10;
var y = 20;

console.log(a == b)
console.log(a != b)

console.log(a > b)
console.log(a < b)

console.log(a >= b)
console.log(a <= b)

var p = '100'
var q = 100

console.log(p == q)  // it give us value true because auometically string covert number and match the next value , thats givve the value is true 

console.log(p === q)  // but when can givve 3 equal it match the value and also datatypes
                      // thats why it give us false because it cannot same data types
console.log(p !== q)  //it give us false , same thing happening 

// ******Logical operator
// && - and 
// || - or
// ! - not

//******Bitwise Operator
// & - binary and operation
// | - binary or operation
// ~ - binary not
// ^ - binary X-or
// << - left-shift
// >> - right-shift

// this two operator disscuss another chapter

//typeoff operator
console.log("type of operator")

console.log(typeof 'string')  // type of operator give us the - this data what teype of data type