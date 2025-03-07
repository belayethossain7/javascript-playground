// for loops 
/*  for (initialize, condition, increment or decrement){
body or block of for loops        
}

*/

//print 10 times belayet hossain

// for (var i = 0; i < 10; i++){
//     console.log((i + 1) + ' belayet hossain')
// }


// print even
// for(var i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

//print the odd
// 


//sum of all number in 1 to 10

// var sum = 0

// for(var i = 1; i <= 10; i++){
    
//     console.log(sum + '+' + i + '=' + (sum + i))
//     sum += i
// }

// console.log('result : '+ sum)


//sum of even number in 1 to 100
var sum = 0
for(var i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i + '+' + sum + '=' + (sum + i))
        sum += i
    }
}

console.log('result : '+ sum)