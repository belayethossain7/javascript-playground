//create a new array,, not affecting with the original array

// var arr = [1,2,3,4]

// var sqrArr = arr.map(function(value){ //use a call back function
//     return value*value
// })

// console.log(arr)
// console.log(sqrArr)

//create a map using call back function
var arr = [1,2,3,4,5]



function mymap(arr, cb){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        var temp = cb(arr[i], i , arr)
        newArr.push(temp)
    }
    return newArr
}


var m5 = mymap(arr, function(value){
    return value*5
})

var m10 = mymap(arr, function(value){
    return value*10
})

console.log(arr)
console.log(m5)
console.log(m10)
