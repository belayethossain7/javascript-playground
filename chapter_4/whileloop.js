// while loop

// var i = 0
// while (i < 10){
//     console.log((i+1)+'. Belayet Hossain')
//     i++
// }

var isRunning = true
while (isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)

    if (rand == 1){
        console.log('You are topper in this class.')
        isRunning = false
    }
    else{
        console.log('Your serial : ' + rand)
    }
}