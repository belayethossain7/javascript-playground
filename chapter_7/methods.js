//using different type method in object

var obj = {
    x: 100,
    y: 200,
    z: 300
}

// object to arrays

console.log(Object.keys(obj)) // give the all property in obj as array ,, 
                              // make array ,only all property have this arra
console.log(Object.values(obj))  // make array of only all vlues)

console.log(Object.entries(obj))  // make 2 dimensional array , there inner array have 2 items , properties and values also 
