// below this called function exepression, in variable there have function
var addition = function (a,b){ // this function call - function anonymous
    return a+b                  // put function in variable
                                // no need to function name cz variable have name
}

var another = addition(10,10)

console.log(another)

setTimeout(function (){  // this settimeout function have a anonymous functin ,, after set a time , after time then this function is call ,, 
    console.log("I will call after 5 sec.")
}, 5000)


console.log('I will execute before setTimeout, its javascript feature')