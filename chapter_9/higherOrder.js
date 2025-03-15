// Higher Order function

// 1. We can Pass function as arguments
// 2. We can return functions from another function

// function add(a,b){
//     return a+b
// }

// function belayet(a,b,func){
//     var c = a+b
//     var d = a-b

//     function multiply(){
//         var e = func(a,b)
//         return c*d*e
//     }

//     return multiply()
// }

// var multipli = belayet(2,3,add)
// console.log(multipli)



// return directlu function , same program 


function add (a,b){
    return a+b
}

function belayet(a,b,func){
    var c = a+b
    var d = a-b


    return function(){
        var e = func(a,b)
        return c*d*e
    }
}


var multiply = belayet(2,3,add)   /// now this is return a function thats mean it store a function and 
                                    // this variable type now is functin because this is return a function na a value 

console.log(multiply())      // this multiply is function thats i call it function type mean with parenthesis and console log it 


// but in first example , that return a value , thats why it store a value and it like variable not funcction that why i just print  variable not functuoin wuith parenthesis

