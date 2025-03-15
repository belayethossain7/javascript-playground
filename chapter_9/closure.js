// First look at closure

var b = 10   ///it also global scope

function a (){
    var x = 5    // this a scope ,, this is the function scope mean function body , if a statement have body like for loop or function , there have body , this body actually called scope
                // thats means a full body , its means 1 scope
    return function(){
        console.log(x)  // access the x that means came to another scope to this scope
    }                   // and closure means one scope item use to another scope  and also without pass argument
} 


var abc = a()

console.dir(abc)