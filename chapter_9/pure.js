// what is Pure function?
// if maintain this 2 rule then its a pure function
// 1. It returns the same result if given the same arguments
// 2. It does not cause any observable side effects

// its a pure function
function sqr(n){
    return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))


// its not pure function
//have side effects , change the value of n, after calling this function
n = 10
function change(){
    n=100
}

change()
console.log(n)  //print 100 cz function calling and it function vlaue effect on this n


// another not a pure functin
// have side effect and change the object value for function value
var point = {
    x: 100,
    y: 200
}

function printPoint(point){
    point.x = 1
    point.y = 2
    console.log(point)
}

printPoint(point)   // print the 1 and 2 cz change the value in the function