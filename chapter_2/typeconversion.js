var str = '1000'
var n = 10

console.log(Number.parseInt(str)) //convert string to integer number
console.log(n.toString())  //convert number to string


console.log(Boolean(-Infinity))   //convert boolean

//falsy value

//falsy value means those value are not false but javascript give this value is false , that why this or those values are called falsy value
// those values are:
// 0
// null
// undifined
// NaN (not a number)
// basically this values are called falsy value 
// without this four value all values are true value thats mean truthy value 
console.log(Boolean(''))
console.log(Boolean('Belayet Hossain '))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean(0))
console.log(Boolean(500))


console.log(true)
var x = true
console.log(x.toString())  //convert boolean to string

var test = String(1234)    //by using constructor we convert number to string
console.log(test)          

                            //by using constructor we can convert any kind of types conversion