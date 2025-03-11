// using return in function

function test(){
    sum = 0
    for (var i =0; i< arguments.length; i++){
        sum += arguments[i]
    }

    return sum
}

var result = test(1,2,3)
console.log(result)
/////
function person(name, email){
    return {
        name: name,
        email: email
    }

   // console.log('I will never be execute') // this line is not execute cz after return than break that mean go side the function,, that why below return any code not execute
}

var p1 = person('Belayet', 'abc@gmail.com')

console.log(p1)