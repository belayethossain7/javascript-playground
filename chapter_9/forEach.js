// functional way traversing
// every array have this forEach method

// var arr = [1,2,3,4,5]

// var sum = 0

// arr.forEach(function(value, index, arr){
//     console.log(value,index,arr)
//     sum += value
// })

// console.log(sum)

//create the for each using the call back
var arr = [1,2,3,4,5]

function forEach(arr, cb){
    for(var i = 0; i<arr.length; i++){
        cb(arr[i],i,arr)
    }
}

var sum = 0
forEach(arr, function(value,index,arr){
    console.log(value,index,arr)
    sum += value
})

console.log(sum)

//adding every element 5

forEach(arr, function(value, index, arr){
    arr[index] = value+5
})

console.log(arr)
