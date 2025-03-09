//Traverse an Array

var arr = [1,2,3,4,5,6,7,8,9]

// for (var i = 0; i < arr.length; i++){
//     //console.log(arr[i])
//     arr[i] = arr[i]+ 2
// }

// console.log(arr)

// var sum = 0
// for(var i = 0; i<arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

var arr2 = [5, 10, 15, 20, 25]
console.log('Even number of this array.')
for (var i = 0; i<arr2.length; i++){
    if (arr2[i]%2==0){
        console.log(arr2[i])
    }
}

console.log('Odd number of this array.')
for (var i = 0; i<arr2.length; i++){
    if (arr2[i]%2 !== 0){
        console.log(arr2[i])
    }
}


console.log('sum of this arrays even number')
var sum = 0
for(var j = 0; j< arr2.length; j++){
    if(arr2[j]%2==0){
        sum += arr2[j]
    }
}
console.log(sum)

console.log('sum of this arrays odd number')
var sum = 0
for(var j = 0; j< arr2.length; j++){
    if(arr2[j]%2 !== 0){
        sum += arr2[j]
    }
}
console.log(sum)