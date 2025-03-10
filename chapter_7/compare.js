// comparing 2 object

var obj1 = {
    x: 10,
    y: 20
}

var obj2 = {
    x: 10,
    y: 20
}

// comparing obj in if statement

if (obj1.x === obj2.x && obj1.y === obj2.y){
    console.log(true)
}
else{
    console.log(false)
}

// Using JSON.stringify function
// this function give use string 
// full object make string 
// when compare , it compare string , if match 2 string , eassily understand equal or not 

// console.log(obj1)  // this objcet
// console.log(JSON.stringify(obj1))  // make this object to string


console.log(JSON.stringify(obj1)  === JSON.stringify(obj2))
