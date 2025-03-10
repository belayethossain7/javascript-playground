//Object
// object is a data structure , where we can store multiple data 
// and we can give the every data name


// student 1:
// math : 80
// chemistry: 90
// physics: 90
// higherMath: 90

// Object declearation or defining
//Object literal
// var point = {
//     x: 10,          // x is called propertices and its propertices value
//     y: 20
// }

// //adding a propertice in a poit object
// point.z = 30

// console.log(point)


// //constructor
// var obj = Object()
// obj.x = 10
// obj.y = 15

// console.log(obj)

// var obj2 = new Object()
// obj2.x = 10

// console.log(obj2)

//accessing Object Properties


// var obj = {
//     x: 10,
//     y: 20,
//     z: 30
// }
// // using the dot notation
// console.log(obj.x)
// console.log(obj.y)
// console.log(obj.x + obj.z)

// //using the array notation
// console.log(obj['x'])  //if array use , you you single cotation, in cotation put value properties
// console.log(obj['y'])

// //when we actually don't knw which will be print that time use array notation
// //when actually usr input the properties that time use array
// //when dynamics
// //example:
// var show = 'x'

// console.log(obj[show]) // pure example of use of arry notation


//Setting objects properties

var obj1 = {
    x: 1,
    y: 2,
    z: 3
}

// updating the properties
obj1.x = 10

//adding another properties
obj1.a = 4

console.log(obj1)

//print wrong properties
//console.log(obj1.d)  // print undefined

//using array notation for updating 
obj1['y'] = 20

// like dynamically// using variable
var prop = 'z'
var value = 30
obj1[prop] = value

console.log(obj1)

//value undefined
obj1.a = undefined
console.log(obj1)


//remove object properties

delete obj1.a   // use delete operator
console.log(obj1)