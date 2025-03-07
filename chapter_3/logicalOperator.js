// Logical operator

var a = 5
var b = 7
var c = 19
var d = 11

if (a>b && c>d){    // Logical and '&&'
    console.log('a is greater than b and c is greater than b')

}
else{
    console.log('at least one condition is false.')
}


if (a > b || c > d){   //Logical or '||'
    console.log('a is greater than or c is greater than d')
}
else{
    console.log('Both condition is false.')
}

var cheack = !!(c > d)
console.log(cheack)