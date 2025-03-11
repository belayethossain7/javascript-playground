//function scoping 
// if a varianle decleare in a funtion , that function access this variable and it child function
// but parent not access her child function

// var a = 'abe'

// if(true){
//     if(true){
//         var b = 'I am b'
//     }
// }

// console.log(b)  / / this are eassily access cz it not a function,


function x(){
    var b = 'i am x'
    function y(){
        var a = 'I am y'
        console.log(a)
        console.log(b)  /// this is accessiable cz child can use prarent variable
    }

    //console.log(a)    // its not working cz parent not access in child variable
    y()
}

x()


// ********
function test (n){
    
    function a (){
        return n%3==0
    }

    function b(){
        return n%5==0
    }

    if( a() && b()){
        console.log(n+ ' is dividual by both 3 and 5')
    }
    else {
        console.log('Not a valid number.')
    }
}

test(15)