function sample(a,b, cb){

    var c = a + b
    var d = a - b

    var result = cb(c, d)  // call the call back function here 
    return result*2
}

function sum(a,b){
    return a+b
}


var result1 = sample(2,5, sum)
console.log(result1)

 // full use of call back function

 var result2 = sample(4,5,function(c,d){
    return c-d
 })

 console.log(result2)

 //another example

 var result3 = sample(5,7,function(c,d){
    return c*d
 })

 console.log(result3)

 //another example 

 var result4 = sample(7,9,function(c,d){
    return c*d
 })

 console.log(result4)