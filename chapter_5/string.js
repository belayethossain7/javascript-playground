// chapter five
// String in Javascript


//what is String

// var str = 'Something'  //String literal
// console.log(str)
// var str2 = String('Something')   //String Constructor
// console.log(str2)


// var n = 10
// var str3 = n + ''
// console.log(str3)

// var str4 = n.toString()
// console.log(str4)

// var str5 = String(n)
// console.log(str5)


//******Escape Notation 
// '\' Escape cherecter

// var str = 'This is a \'String\''
// console.log(str)

// var str2 = 'This is a \n String'  // \n print new line
// console.log(str2)

// var str3 = 'this is a \t string'   // \t print tab
// console.log(str3)

// var str4 = 'this is a \\String'    // \-print this \
// console.log(str4)


// Javascript Uses Lexicographic sytem to compare to string

// String comparison

// var a = 'aaaaz'
// var b = 'aaaaZ'

// console.log(a < b)

// console.log('a' > 'Z')

// console.log('001' == 1)  //when comparison string with number , this string will be number



//******* different type of string method 

// var a = 'I am'
// var b = 'Belayet Hossain'

// var c = a.concat(' ', b)
// console.log(c)

// // pring substring of a string
// var d = c.substring(5,20)  // 5 is inclusive and 20 is exclusive 
// console.log(d)

// // print a specific charecter in string by using is indexing
// var e = c.charAt('5')
// console.log(e)

// console.log(c.startsWith('I am'))
// console.log(c.endsWith('Hossain'))
// console.log(a.toUpperCase())
// console.log(b.toLowerCase())
// console.log('     belayet    '.trim()) //start and ending space will remove when using the trim
// console.log(c.split(' ')) //give the array when use split, breaking and make an array


//length of a string 

// without legth build in function
var str = 'Belayet Hossain'
var length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }
    else{
        length++
    }
}

console.log(length)

// using build in function

var str2 = 'Hello'
console.log(str2.length)
console.log('hi'.length)