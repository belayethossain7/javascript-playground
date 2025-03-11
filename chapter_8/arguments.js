//arguments //provide real data
//perameter

// function add(a,b){
//     var result = a + b
//     console.log(result)
// }

// add(1,2)
// add(100, 401)

// var arr = [1,2,3,4,5]

// function addArray(a){
//     var sum =0
//     for(var i =0; i< a.length; i++){
//         sum += a[i]
//     }

//     console.log('Summation: ' + sum)
// }

// addArray(arr)   // 'arr' is argument 


//********  Argument */

// argument provide the object,, this object is array based
// all function have this built in argument
// you can eassily use bosy of function
//if you not use parameter in function , but you give value when call the function

function test(){
  
    for(var i = 0; i< arguments.length; i++){
        console.log(arguments[i])
    }
  
}

test(10,20,30)

function add(){
    var sum = 0
    for(var i =0 ; i< arguments.length; i++){
        sum+=arguments[i]
    }
    console.log(sum)
}

add(1,2,3,4,5)