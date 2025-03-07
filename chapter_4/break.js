// brak statement
// go outside the loop

// while (true){
//     var rand = Math.floor (Math.random() * 10 + 1)
//     if (rand == 1){
//         console.log('you are topper.')
//         break
//     }
//     else{
//         console.log('your serial is : '+ rand)
//     }
// }


// using brak statement in for loop

for ( var i = 1; i <= 10; i++){
    if (i % 5 == 0){
        console.log('ok')
        break
    }
    else{
        console.log(i)
    }
}