// First class Function
function add(a,b){
    return a+b
}

// 1. A Function can be stored in a variable
var sum = add
console.log(sum(5,5))
console.log(typeof sum)


// 2. A Function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](10,10))


// 3. A Function can be stored in an Object
var obj = {
    x: add
}
console.log(obj)
console.log(obj.x(25,25))


// 4. We can create function as need
setTimeout(function (){
    console.log('I am inside a function..')
}, 2000)