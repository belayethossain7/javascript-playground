// infinity for loop 

for (; ;){
    rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 1){
        console.log('You are tropper.')
        break
    }
    else{
        console.log('your serial number: '+ rand)
    }
}

