// 'logical and' 'logical or' short-hand

var name = ''

/*if name is empty string than print belayet hossain 
that why use this kind of  or short-hand, and when 
name has name that time print her name  
*/
var fullName = name || 'Belayet Hossain' 
console.log(fullName)

/* if both side is true that time use this type of 
and shorthand if first side is true only thats time 
print the second value  */
var isOk = false
isOk && console.log('Everything is OK')


var a = 11
var b = 10
var check = (a==b) 
check && console.log('a and b is equl')


// ****** use this short hand and ternary operator we can
// we can reduce the if else condition , also reduce many this 
// that why this short hand and ternary operator very helpfull
