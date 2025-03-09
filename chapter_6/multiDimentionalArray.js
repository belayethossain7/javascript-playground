var arr = [
    [1,2,3,4],
    [6,7,8,9],
    [10,11,12,13],
    [14,15,16,17]
]

for(var i = 0; i< arr.length; i++){
    for(var j = 0; j< arr[i].length; j++){
        console.log('Element : '+ i + ' : '+ arr[i][j])
    }
}