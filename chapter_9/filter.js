var arr = [1,2,3,4,5,6,7,8,9]

// var fill_arr = arr.filter(function(value){
//     return value%2 == 0
// })

// console.log(fill_arr)

// create the filter with call back

function fill (arr, cb){
    var nArr = []
    for(var i =0; i< arr.length; i++){
        if (cb(arr[i],i,arr)){
            nArr.push(arr[i])
        }
    }

    return nArr
}

var n_fill = fill(arr, function(value){
    return value%2 == 0
})

var n_fill2 = fill(arr, function(value){
    return value%2 == 1
})

console.log(n_fill)
console.log(n_fill2)